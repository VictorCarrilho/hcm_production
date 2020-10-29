export function companyRequest(companyNameURL: String) {
    return {
        type: '@company/COMPANY_REQUEST',
        payload: { companyNameURL }
    }
}


export function companySuccess(companyName: String, companyToken: String) {
    return {
        type: '@company/COMPANY_SUCCESS',
        payload: { companyName, companyToken }
    }
}


export function companyFailure() {
    return {
        type: '@company/COMPANY_FAILURE'
    }
}