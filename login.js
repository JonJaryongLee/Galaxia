/*
    name: Facebook 로그인 연동
    description: Facebook 과 연동하여, 로그인을 구현합니다.
    author: 김호 (kerryeon)

    object: 'user'
        attributes:
        methods:
            login(): 로그인을 시도합니다. 이미 로그인한 상태면 다시 시도하지 않습니다.
                input:
                output:
            hasLogged(): 로그인한 상태면 true, 아니면 false 를 반환합니다.
                input:
                output:
                    1. log on: true
                    2. log off: false
            getName(): 유저의 이름(닉네임)을 불러옵니다.
                input:
                output:
                    1. log on: User's Username
                    2. log out: null
            getEmail(): 유저의 이메일 주소를 불러옵니다.
                input:
                output:
                    1. log on: User's Email Address
                    2. log out: null
            logout(): 로그아웃을 시도합니다. 이미 로그아웃한 상태면 다시 시도하지 않습니다.
                input:
                output:
*/

// 페이스북 비동기 프로세스
window.fbAsyncInit = function() {
    FB.init({
        appId      : '239756943362085',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
    });
    FB.AppEvents.logPageView();
};

// 페이스북에서 제공하는 API 연동
(
    function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk')
);

// user 에 대한 클래스
class _User {
    constructor() {
        this._status = false;

        this._userName = null;
        this._userEmail = null;
    }

    hasLogged() {
        return user._status;
    }

    login() {
        if (user.hasLogged()) return;
        FB.login( function(response) {
            user._status = response.status === 'connected';
            if (user._status)
                {
                    // 로그인에 성공하면 유저 정보를 불러옵니다.
                    FB.api('/me', 'post', {fields: ['name', 'email']}, function(response) {
                        user._userName = response.name;
                        user._userEmail = response.email;
                    });
                }
        }, {scope: 'public_profile, email'});
    }

    getName() {
        if (! user.hasLogged()) return null;
        return user._userName;
    }

    getEmail() {
        if (! user.hasLogged()) return null;
        return user._userEmail;
    }

    logout() {
        FB.logout(function(response) {
            // Person is now logged out
        });
    }
}

// 개발 편의를 위해, 로그인 행위를 모방합니다.
// 실제 릴리즈 시에는 제거해 주십시오.
class _UserDebug {
    constructor() {
        this._status = false;

        this._userName = null;
        this._userEmail = null;
    }

    hasLogged() {
        return user._status;
    }

    login() {
        if (user.hasLogged()) return;
        user._status = true;
        user._userName = '감자';
        user._userEmail = 'potato@naver.com';
    }

    getName() {
        if (! user.hasLogged()) return null;
        return user._userName;
    }

    getEmail() {
        if (! user.hasLogged()) return null;
        return user._userEmail;
    }

    logout() {

    }
}

// 페이스북 유저와 관한 정보를 담고 있습니다.
//let user = new _User();

// 릴리즈 시에는 제거해 주십시오.
let user = new _UserDebug();
