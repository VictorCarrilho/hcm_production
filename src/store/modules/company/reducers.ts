import produce from 'immer'; // Lib para manipular o state

const INITIAL_STATE = {
    companyName: '',
    companyToken: '',
    loading: false
}

export default function company(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        // Verificar se a empresa existe na base de dados \\
        case '@company/COMPANY_REQUEST':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        // Se a empresa existir, gerar o token para autenticação do usuário \\
        case '@company/COMPANY_SUCCESS':
            return produce(state, (draft) => {
                draft.companyName = action.payload.companyName;
                draft.companyToken = action.payload.companyToken;
                draft.loading = false;
            });


        case '@company/COMPANY_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
                draft.companyName = '';
                draft.companyToken = '';
            });

        default:
            return state;
    }

}