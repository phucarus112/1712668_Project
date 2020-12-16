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

export const checkData = (username, password, fullname, dob, email, phone) =>{
        if(username === '')
            return {status: 404, errorString: "Tên đăng nhập không được để trống"};
    else if(password === '')
        return {status: 404, errorString: "Mật khẩu không được để trống"};
    else if(fullname === '')
        return {status: 404, errorString: "Họ tên không được để trống"};
    else if(dob === '')
        return {status: 404, errorString: "Ngày tháng năm sinh không được để trống"};
    else if(email === '')
        return {status: 404, errorString: "Email không được để trống"};
    else if(phone === '')
        return {status: 404, errorString: "Số điện thoại không được để trống"};
    else 
        return {status: 200};
}
