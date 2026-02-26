# Logic Gates

| Gate | Symbol | Expression | Description |
|------|--------|------------|-------------|
| **AND** | `A · B` | Y = A · B | Output HIGH only if all inputs HIGH |
| **OR** | `A + B` | Y = A + B | Output HIGH if any input HIGH |
| **NOT** | `Ā` | Y = Ā | Inverts input |
| **NAND** | `A ↑ B` | Y = A · B | AND followed by NOT |
| **NOR** | `A ↓ B` | Y = A + B | OR followed by NOT |
| **XOR** | `A ⊕ B` | Y = A ⊕ B | Output HIGH if inputs differ |
| **XNOR** | `A ⊙ B` | Y = A ⊙ B | Output HIGH if inputs same |

## Truth Tables

### AND Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### NOT Gate
| A | Y |
|---|---|
| 0 | 1 |
| 1 | 0 |

### NAND Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NOR Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

### XOR Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### XNOR Gate
| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## Common ICs

| Gate | TTL | CMOS |
|------|-----|------|
| AND | 7408 | 4081 |
| OR | 7432 | 4071 |
| NOT | 7404 | 4069 |
| NAND | 7400 | 4011 |
| NOR | 7402 | 4001 |
| XOR | 7486 | 4030 |

## Universal Gates

**NAND** and **NOR** can create any other gate.

### NOT from NAND
`Y = A · A = Ā`

### AND from NAND
`Y = A · B · A · B = A · B`

### OR from NAND  
`Y = Ā · B̄ = A + B` (De Morgan's)

## Boolean Laws

| Law | Expression |
|-----|------------|
| Identity | A + 0 = A, A · 1 = A |
| Null | A + 1 = 1, A · 0 = 0 |
| Idempotent | A + A = A, A · A = A |
| Complement | A + Ā = 1, A · Ā = 0 |
| Commutative | A + B = B + A, A · B = B · A |
| Associative | (A+B)+C = A+(B+C) |
| Distributive | A+(B·C) = (A+B)·(A+C) |
| De Morgan's | A+B = Ā · B̄, A·B = Ā + B̄ |
