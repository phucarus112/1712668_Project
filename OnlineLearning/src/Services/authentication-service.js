export const login = (username, password) =>{
    if(username === '')
        return {status: 404, errorString: "Tên đăng nhập không được để trống"};
    else if(password === '')
        return {status: 404, errorString: "Mật khẩu không được để trống"};
    else 
        return {status: 200};
}

function isLeafYear(year){
    let res = 0;
    if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)
        res = 1;
    return res;
}

function isValidDate(day,month, year){
    let res = 1;
    if(year < 1) res = 0;
    if(month < 1 || month >12) res = 0;
    switch(month){
        case 4 : case 6: case 9: case 11:
            if(day > 30 || day < 1) res = 0;
            break;
        case 2: 
            if(isLeafYear(year) === 1){
                if(day > 20 || day < 1) res = 0;
            }else {
                if(day > 28 || day < 1) res = 0;
            }
            break;
    }
    return res;
}

export const checkData = (password, confirm, fullname, email, phone) =>{
    // if(username === '')
    //     return {status: 404, errorString: "Tên đăng nhập không được để trống"};
    if(password === '')
        return {status: 404, errorString: "Mật khẩu không được để trống"};
    else if(confirm === '')
        return {status: 404, errorString: "Nhập lại mật khẩu không được để trống"};
    else if(fullname === '')
        return {status: 404, errorString: "Họ tên không được để trống"};
    else if(email === '')
        return {status: 404, errorString: "Email không được để trống"};
    else if(phone === '')
        return {status: 404, errorString: "Số điện thoại không được để trống"};
    // else if(username.length < 6)
    //     return {status: 404, errorString: "Tên đăng nhập phải lớn hơn 6 ký tự"};
    // else if(username.length > 20)
    //     return {status: 404, errorString: "Tên đăng nhập phải tối đa 20 ký tự"};
    else if(password.length < 8 || password.length > 20)
        return {status: 404, errorString: "Mật khẩu phải lớn hơn 8 và nhỏ hơn 20 ký tự"};
    else if(password != confirm)
        return {status: 404, errorString: "Xác nhận mật khẩu không trùng khớp"};
    // else if(isValidDate(parseInt(day),parseInt(month),parseInt(year)) === 0)
    //     return {status: 404, errorString: "Ngày tháng năm sinh không hợp lệ"};
    else 
        return {status: 200};
}

export const isEmptyInput = (input) =>{
    return (input === '')?{status: 404, msg: "Email không được để trống"} : {status: 200, msg: ""} ;
}
