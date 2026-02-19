# JWT Expiration: O perigo do cast implícito em expiresIn

**Contexto:**
Implementação de camada de autenticação com `jsonwebtoken`, utilizando variáveis de ambiente para gerenciar o tempo de sessão.

**O Problema:**
O token expirava em ~1.4 minutos, apesar da configuração estar definida como `86400` (planejado para 24 horas). O erro aconteceu por configurar o valor no "automático", sem considerar como a lib processa diferentes tipos primitivos vindos do `process.env`.

**A Investigação:**
Analisando a documentação, vi que o parâmetro `expiresIn` usa o pacote `ms` internamente. O comportamento muda drasticamente conforme o tipo:

- **Number:** Tratado como **segundos**.
- **String:** Tratado via `ms`. Se não houver unidade (ex: "1h", "1d"), o padrão para strings numéricas é **milissegundos**.

Cálculo do erro: $86400ms = 86.4s \approx 1.44min$.

**A Solução:**
Garantir o tipo correto no parâmetro `expiresIn`, já que `process.env` sempre retorna strings.

```javascript
// Antes (Erro de interpretação: milissegundos)
{
  expiresIn: process.env.EXPIRES_IN;
}

// Depois (Correção técnica: segundos)
{
  expiresIn: Number(process.env.EXPIRES_IN);
}

// Alternativa (Mais legível)
{
  expiresIn: "24h";
}
```
