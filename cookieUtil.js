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
    set (name, value, options) {
        let cookie = name + '=' + encodeURIComponent(value);
        if ( options ) {
            if ( options.expires instanceof Date ) 
                cookie += '; expires=' + options.expires.toGMTString();
            if ( options.path ) 
                cookie += '; path=' + options.path;
            if ( options.domain )
                cookie += '; domain=' + options.domain;
            if ( options.maxAge )
                cookie += '; Max-Age=' + options.maxAge;
            if ( options.secure )
                cookie += '; secure';
        }
        document.cookie = cookie;
    },
    unset (name, option) {
        this.set(name, '', Object.assign({}, option, { expires: new Date(0) }));
    }
}

export default cookieUtil;
