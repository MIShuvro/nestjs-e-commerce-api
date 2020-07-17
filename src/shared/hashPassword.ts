import { hashSync } from 'bcryptjs'

export function hashPassword(text: string): string {
    return hashSync(text, 12)
}