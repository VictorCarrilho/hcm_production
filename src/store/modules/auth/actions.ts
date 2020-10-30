interface PropsUser {
    login: String
    name: String
}


// Function que é executada ao tentar realizar o login \\
export function signInRequest(email: string, password: string) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }
    }
}

// Function que é executada caso o login tenha sido realizado com sucesso \\
export function signInSuccess(token: String, user: PropsUser) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user }
    }
}

// Function que é executada caso o login tenha realizado com erros \\
export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE'
    }
}


// Function que é executada caso o usuário realize o login do sistema \\
export function signOut() {
    return {
        type: '@auth/SIGN_OUT'
    }
}