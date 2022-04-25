import { container } from "tsyringe";
import { ICryptoRepository } from "../modules/crypto/repositories/ICryptoRepository";
import { PrismaCryptoRepository } from "../modules/crypto/repositories/implementation/PrismaCryptoRepository";

container.registerSingleton<ICryptoRepository>(
    'CryptoRepository',
    PrismaCryptoRepository
)