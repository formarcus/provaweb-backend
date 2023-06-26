import prisma from "../prismaClient";   
import { Request, Response } from "express";

export class Create {
    async handler (request: Request, response: Response) {
        
        const {categoria, nome, descricao, preco} = request.body;

        try{

            const produto = await prisma.produto.create({
                data: {
                    categoria,
                    nome,
                    descricao,
                    preco
                }
            });
            
            return response.json(produto);
        }
        catch(error){

            return response.json(error);
        }
    }
}

export class Find {
    async handler (request: Request, response: Response) {
        
        const {categoria, nome, descricao, preco} = request.params;

        try{

            const produto = await prisma.produto.findMany({
                where: {
                    categoria:parseInt(categoria),
                    nome,
                    descricao,
                    preco:parseFloat(preco)
                }
            });
            
            return response.json(produto);
        }
        catch(error){

            return response.json(error);
        }
    }
}

export class Delete {
    async handler (request: Request, response: Response) {
        
        const {id} = request.body;

        try{

            const produto = await prisma.produto.delete({
                where: {
                    id
                }
            });
            
            return response.json(produto);
        }
        catch(error){

            return response.json(error);
        }
    }
}



