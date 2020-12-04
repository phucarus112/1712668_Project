export const login = (username, password) =>{
    if(username === '')
        return {status: 404, errorString: "Tên đăng nhập không được để trống"};
    else if(password === '')
        return {status: 404, errorString: "Mật khẩu không được để trống"};
    else if(username === "admin"){
        if(password != "123456")
            return {status: 404, errorString: "Mật khẩu chưa chính xác. Vui lòng thử lại"};
        else 
            return {status: 200, user: {token: "abcd", username: username, password: password, fullname: "Adminstrator" }};
    }
    else return {status: 404, errorString: "Tài khoản không tồn tại. Vui lòng thử lại"};
}