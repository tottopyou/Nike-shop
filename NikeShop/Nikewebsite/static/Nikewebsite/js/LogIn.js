


const  log_button = document.querySelector(".Log-in");
const  close_button = document.querySelector(".close-button");

log_button.addEventListener("click", log_menu);
close_button.addEventListener("click",close)

function log_menu (){
    document.querySelector(".Log_in").style.display = 'flex';
    setTimeout(() => {document.querySelector(".Log_in").style.animationPlayState = 'paused';},1000);
}

function close (){
    document.querySelector(".Log_in").style.animationPlayState = '';
    setTimeout(() => {document.querySelector(".Log_in").style.display = 'none';},1000);
}



const create = document.querySelector("#create_button");
create.addEventListener("click", create_acc);


function create_acc (){
    let Field = document.querySelector(".input-place");
    let name = `<button class="google">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-5.90892,16.68758 -21.78667,28.66667 -40.50242,28.66667c-23.74675,0 -43,-19.25325 -43,-43c0,-23.74675 19.25325,-43 43,-43c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-39.57792,0 -71.66667,32.08875 -71.66667,71.66667c0,39.57792 32.08875,71.66667 71.66667,71.66667c39.57792,0 71.66667,-32.08875 71.66667,-71.66667c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z" fill="#ffc107"></path><path d="M22.5965,52.64275l23.54608,17.26808c6.37117,-15.77383 21.801,-26.91083 39.85742,-26.91083c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-27.52717,0 -51.39933,15.54092 -63.4035,38.30942z" fill="#ff3d00"></path><path d="M86,157.66667c18.5115,0 35.33167,-7.08425 48.04892,-18.60467l-22.18083,-18.7695c-7.19533,5.45025 -16.13933,8.7075 -25.86808,8.7075c-18.6405,0 -34.46808,-11.88592 -40.43075,-28.47317l-23.3705,18.00625c11.86083,23.20925 35.948,39.13358 63.80125,39.13358z" fill="#4caf50"></path><path d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-2.838,8.01592 -7.99442,14.92817 -14.64508,19.96275c0.00358,-0.00358 0.00717,-0.00358 0.01075,-0.00717l22.18083,18.7695c-1.5695,1.42617 23.61775,-17.22508 23.61775,-53.05842c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z" fill="#1976d2"></path></g></g></svg>
    Continue with Google
    </button>
    <p>Or</p>
    <input type="text" id="username" name="name" placeholder="Name"></input>
    <input type="text" name="Email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <button class="LogIn_button">
    Create account
    </button>
    <div class="acc">Already have an account?  <a class="create" id="Log_In_button"> Log in</a></div>`
    Field.innerHTML = name;

}
function Log_In (){
    let Field = document.querySelector(".input-place");
    let name = ` <button class="google">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-5.90892,16.68758 -21.78667,28.66667 -40.50242,28.66667c-23.74675,0 -43,-19.25325 -43,-43c0,-23.74675 19.25325,-43 43,-43c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-39.57792,0 -71.66667,32.08875 -71.66667,71.66667c0,39.57792 32.08875,71.66667 71.66667,71.66667c39.57792,0 71.66667,-32.08875 71.66667,-71.66667c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z" fill="#ffc107"></path><path d="M22.5965,52.64275l23.54608,17.26808c6.37117,-15.77383 21.801,-26.91083 39.85742,-26.91083c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-27.52717,0 -51.39933,15.54092 -63.4035,38.30942z" fill="#ff3d00"></path><path d="M86,157.66667c18.5115,0 35.33167,-7.08425 48.04892,-18.60467l-22.18083,-18.7695c-7.19533,5.45025 -16.13933,8.7075 -25.86808,8.7075c-18.6405,0 -34.46808,-11.88592 -40.43075,-28.47317l-23.3705,18.00625c11.86083,23.20925 35.948,39.13358 63.80125,39.13358z" fill="#4caf50"></path><path d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-2.838,8.01592 -7.99442,14.92817 -14.64508,19.96275c0.00358,-0.00358 0.00717,-0.00358 0.01075,-0.00717l22.18083,18.7695c-1.5695,1.42617 23.61775,-17.22508 23.61775,-53.05842c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z" fill="#1976d2"></path></g></g></svg>
    Continue with Google
    </button>
    <p>Or</p>
    <input type="text" name="Email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <button class="LogIn_button">
        Log in
    </button>
    <div class="acc">No account?  <a class="create" id="create_button"> Create one</a></div>`
    Field.innerHTML = name;
}
