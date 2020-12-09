export const login = (username, password) =>{
    if(username === '')
        return {status: 404, errorString: "Tên đăng nhập không được để trống"};
    else if(password === '')
        return {status: 404, errorString: "Mật khẩu không được để trống"};
    else if(username === "Admin"){
        if(password != "123456")
            return {status: 404, errorString: "Mật khẩu chưa chính xác. Vui lòng thử lại"};
        else 
            return {status: 200, user: {token: "abcd", username: username, password: password, fullname: "Adminstrator", dob: "02/11/1999", email: "1712668@student.hcmus.edu.vn", phone: "0335160976" }};
    }
    else return {status: 404, errorString: "Tài khoản không tồn tại. Vui lòng thử lại"};
}