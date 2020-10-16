import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) {
        
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    findById(id: string){ 
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
    }

    insert(obj : ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }
}