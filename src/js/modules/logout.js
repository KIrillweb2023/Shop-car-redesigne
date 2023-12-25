function logout(){
    const logbtn = document.querySelector(".logout__wrapper__form_login");
    const modalLog = document.querySelector(".logout__wrapper__login");
    const regBtn = document.querySelector(".logout__wrapper__login_login");
    const modalReg = document.querySelector(".logout__wrapper__form");

    function userNow(log, reg, modalReg, modalLog){
        reg.addEventListener('click', () =>{
            modalReg.style.display = 'none';
            modalLog.style.display = 'flex';
        });
        log.addEventListener('click', () =>{
            modalReg.style.display = '';
            modalLog.style.display = '';
        });
    }
    
    if(regBtn){
        userNow(regBtn, logbtn, modalReg, modalLog);
    }
}
export default logout;