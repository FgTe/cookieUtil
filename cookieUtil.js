let cookieUtil = {
    matchPattern: '=([^;]*)(?:$|;)',
    get (name) {
        let matched = document.cookie.match(new RegExp(name + this.matchPattern));
        if ( matched ) {
            return decodeURIComponent(matched[1]);
        } else {
            return null;
        }
    },
    set (name, value, option) {
        let cookie = name + '=' + encodeURIComponent(value);
        if ( option ) {
            if ( option.expires instanceof Date ) 
                cookie += '; expires=' + option.expires.toGMTString();
            if ( option.path ) 
                cookie += '; path=' + option.path;
            if ( option.domain )
                cookie += '; domain=' + option.domain;
            if ( option.maxAge )
                cookie += '; Max-Age='
            if ( option.secure )
                cookie += '; secure';
        }
        document.cookie = cookie;
    },
    unset (name, option) {
        this.set(name, '', Object.assign({}, option, { expires: new Date(0) }));
    }
}

export default cookieUtil;