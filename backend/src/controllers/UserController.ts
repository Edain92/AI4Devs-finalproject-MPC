import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async getUserBySessionId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sessionId = req.cookies.sessionId;
            if (!sessionId) {
                res.status(400).json({ message: "Session ID is required" });
                return;
            }
            const user = await this.userService.getUserBySessionId(sessionId);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { sessionId } = req.body;
            const user = await this.userService.createUser(sessionId);
            res.cookie("sessionId", sessionId, { httpOnly: true });
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
}