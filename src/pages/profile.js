import { navigateTo } from "../router/router";

export const userProfile = (app) => {
    app.innerHTML = `
        <div>
            <p>Bienvenido a tu perfil</p>

            <button id='boton' class='bg-orange-500 p-2 cursor-pointer'>
                Ir a dashboard
            </button>
        </div>
    `

    const boton = document.getElementById('boton');

    boton.onclick = ()=>{
        navigateTo('/dashboard')
    }
}