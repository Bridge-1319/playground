'use server'
// import fetch from 'node-fetch';

const apiUrl = 'https://660fe3a50640280f219bbe5d.mockapi.io/bank-accounts';

export async function createBankAccount(bankAccount: { accountNumber: string, balance: number }) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bankAccount),
    });
    return response.json();
}

export async function getBankAccounts() {
    const response = await fetch(apiUrl);
    return response.json();
}

export async function updateBankAccount(accountNumber: string, newBalance: number) {
    const bankAccounts = await getBankAccounts();
    const bankAccount = bankAccounts.find((account: { accountNumber: string, balance: number }) => account.accountNumber === accountNumber);
    if (bankAccount) {
        const response = await fetch(`${apiUrl}/${bankAccount.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...bankAccount, balance: newBalance }),
        });
        return response.json();
    }
}

export async function deleteBankAccount(accountNumber: string) {
    const bankAccounts = await getBankAccounts();
    const bankAccount = bankAccounts.find((account: { accountNumber: string, balance: number }) => account.accountNumber === accountNumber);
    if (bankAccount) {
        const response = await fetch(`${apiUrl}/${bankAccount.id}`, {
            method: 'DELETE',
        });
        return response.json();
    }
}