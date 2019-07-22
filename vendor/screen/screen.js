// device ditection

var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
var mobileDetect = window.MobileDetect,
    deviceInput = {
        userAgent: window.navigator.userAgent,
        maxPhoneWidth: 600
    },
    md = new MobileDetect(),
    rules = MobileDetect._impl.mobileDetectRules,
    outcome = [];

function analyze(userAgent, maxPhoneWidth) {
    md = new MobileDetect(userAgent, parseInt(maxPhoneWidth, 10)),
        rules = MobileDetect._impl.mobileDetectRules,
        outcome = [];
    outcome.push({
        key: 'phone()',
        val: md.phone()
    });
    outcome.push({
        key: 'tablet()',
        val: md.tablet()
    });
    outcome.push({
        key: 'mobile()',
        val: md.mobile()
    });
    outcome.push({
        key: 'os()',
        val: md.os()
    });
    outcome.push({
        key: 'userAgent()',
        val: md.userAgent()
    });
    outcome.push({
        key: 'mobileGrade()',
        val: md.mobileGrade()
    });
    outcome.push({
        key: 'smaller side',
        val: MobileDetect._impl.getDeviceSmallerSide()
    });
    outcome.push({
        key: '_version',
        val: MobileDetect.version || '(<1.3.3)'
    });
    outcome.push({
        key: 'isiPad',
        val: isiPad
    });
    outcome.push({
        key: 'isiPhone',
        val: isiPhone
    });
    outcome.push({
        key: 'isWindowsPhone',
        val: isWindowsPhone
    });
    outcome.push({
        key: 'isiDevice',
        val: isiDevice
    });
    outcome.push({
        key: 'isAndroid',
        val: isAndroid
    });
    outcome.push({
        key: 'isWebOS',
        val: isWebOS
    });

     ['tablets', 'phones', 'oss', 'uas', 'utils'].forEach(function (section) {
        Object.keys(rules[section]).filter(function (key) {
            return md.is(key);
        }).forEach(function (key) {
            outcome.push({
                key: 'is("' + key + '")',
                val: true
            });
        });
    });

    Object.keys(rules.props).forEach(function (propKey) {
        var version;
        version = md.versionStr(propKey);
        if (version) {
            outcome.push({
                key: 'versionStr("' + propKey + '")',
                val: '"' + version + '"'
            });
        }
        version = md.version(propKey);
        if (version) {
            outcome.push({
                key: 'version("' + propKey + '")',
                val: version
            });
        }
    });

    return outcome;
}

$(window).on('rezise', function () {
    analyze(deviceInput.userAgent, parseInt(deviceInput.maxPhoneWidth, 10));
})

$(window).on("load", function (event) {
    if (window.innerHeight > window.innerWidth) {
        jQuery('body').addClass('portrait').removeClass('landscape');
    } else {
        jQuery('body').addClass('landscape').removeClass('portrait');
    }
    try {
        outcome = analyze(deviceInput.userAgent, parseInt(deviceInput.maxPhoneWidth, 10));
    } catch (e) {
        outcome = [{
            key: 'Error occurred',
            val: '' + e
        }];
    }
    console.log(outcome);
    jQuery('body').attr({
        "data-view": md.mobile()
    });
});

$(window).on("orientationchange", function (event) {
    if (event.orientation === "portrait") {
        console.log("Current View: " + event.orientation);
        console.log("phone = " + md.mobile());
        //console.log("tablet = "+md.tablet());
        jQuery('body').removeClass('landscape').addClass('portrait');
    } else {
        console.log("Current View: " + event.orientation);
        console.log("phone = " + md.mobile());
        //console.log("tablet = "+md.tablet());
        jQuery('body').removeClass('portrait').addClass('landscape');
    }
});
