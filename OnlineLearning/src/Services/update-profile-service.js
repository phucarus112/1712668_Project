export const update = (token,username, password, fullname,dob,email,phone) =>{
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
        return {status: 200, user: {token: token, username: username, password: password, fullname: fullname, dob: dob, email: email, phone: phone }};
}