    
import { apiPost, apiGet, apiReq, apiPut } from '../utils';
import { formTypes } from '../constants';

export function getListingAPI() {
    return apiGet('/list')
}

export function getDetailItemAPI(id) {
    return apiGet(`/view/${id}`)
}