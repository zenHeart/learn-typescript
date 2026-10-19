# KaTeX 数学符号语法完全指南

> 整理 KaTeX 支持的数学符号语法，包含常用符号分类、代码示例和交互演示。

## 一、KaTeX 简介

### 1.1 什么是 KaTeX

KaTeX 是一个轻量级的 JavaScript 库，用于在网页中快速渲染 LaTeX 数学公式。相比 MathJax，KaTeX 更轻量、渲染速度更快。

**特点**：
- 渲染速度比 MathJax 快 2-3 倍
- 输出为 HTML/CSS，无需 SVG 或图片
- 支持大多数 LaTeX 数学命令
- 自动渲染，无需 JavaScript 调用

### 1.2 基本用法

```html
<!-- 引入 KaTeX CSS 和 JS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>

<!-- 自动渲染（推荐） -->
<span class="math-display">c = \pm\sqrt{a^2 + b^2}</span>

<script>
  // 自动渲染所有 .math-display 元素
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false}
    ],
    throwOnError: false
  });
</script>
```

**CDN 推荐**：
```html
<!-- jsDelivr (推荐) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">

<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/katex@0.16.9/dist/katex.min.css">
```

---

## 二、希腊字母

### 2.1 小写希腊字母

| 符号 | 命令 | 说明 |
|------|------|------|
| α | `\alpha` | alpha |
| β | `\beta` | beta |
| γ | `\gamma` | gamma |
| δ | `\delta` | delta |
| ε | `\epsilon` | epsilon |
| ζ | `\zeta` | zeta |
| η | `\eta` | eta |
| θ | `\theta` | theta |
| ι | `\iota` | iota |
| κ | `\kappa` | kappa |
| λ | `\lambda` | lambda |
| μ | `\mu` | mu |
| ν | `\nu` | nu |
| ξ | `\xi` | xi |
| ο | `\omicron` | omicron |
| π | `\pi` | pi |
| ρ | `\rho` | rho |
| σ | `\sigma` | sigma |
| τ | `\tau` | tau |
| υ | `\upsilon` | upsilon |
| φ | `\phi` | phi |
| χ | `\chi` | chi |
| ψ | `\psi` | psi |
| ω | `\omega` | omega |

### 2.2 大写希腊字母

| 符号 | 命令 | 说明 |
|------|------|------|
| Γ | `\Gamma` | Gamma |
| Δ | `\Delta` | Delta |
| Θ | `\Theta` | Theta |
| Λ | `\Lambda` | Lambda |
| Ξ | `\Xi` | Xi |
| Π | `\Pi` | Pi |
| Σ | `\Sigma` | Sigma |
| Τ | `\Tau` | Tau |
| Υ | `\Upsilon` | Upsilon |
| Φ | `\Phi` | Phi |
| Ψ | `\Psi` | Psi |
| Ω | `\Omega` | Omega |

### 2.3 变体字母

| 符号 | 命令 | 说明 |
|------|------|------|
| ε | `\varepsilon` | _variant epsilon |
| θ | `\vartheta` | variant theta |
| φ | `\varphi` | variant phi |
| ρ | `\\varrho` | variant rho |
| σ | `\事例` | variant sigma |
| π | `\varpi` | variant pi |
| κ | `\varkappa` | variant kappa |

---

## 三、运算符

### 3.1 基本运算符

| 符号 | 命令 | 说明 |
|------|------|------|
| + | `+` | 加 |
| − | `-` | 减 |
| × | `\times` | 乘 |
| ÷ | `\div` | 除 |
| ± | `\pm` | 加减 |
| ∓ | `\mp` | 减加 |
| ⋅ | `\cdot` | 点乘 |
| ∘ | `\circ` | 圈乘 |
| ⊙ | `\odot` | 点圈 |
| ⊚ | `\oslash` | 斜圈 |
| ⊛ | `\asterisk` | 星号 |
| ⊕ | `\oplus` | 圆加 |
| ⊖ | `\ominus` | 圆减 |
| ⊗ | `\otimes` | 圆乘 |

### 3.2 分数

| 表达式 | 命令 |
|--------|------|
| $\frac{a}{b}$ | `\frac{a}{b}` |
| $\frac{1}{2}$ | `\frac{1}{2}` |
| $\frac{a+b}{c+d}$ | `\frac{a+b}{c+d}` |
| $\dfrac{a}{b}$ | `\dfrac{a}{b}` (显示模式大分数) |
| ${a \over b}$ | `{a \over b}` |

### 3.3 开方

| 表达式 | 命令 |
|--------|------|
| $\sqrt{x}$ | `\sqrt{x}` |
| $\sqrt[n]{x}$ | `\sqrt[n]{x}` |
| $\sqrt{a+b}$ | `\sqrt{a+b}` |
| $\sqrt{1+x^2}$ | `\sqrt{1+x^2}` |

### 3.4 上下标

| 表达式 | 命令 |
|--------|------|
| $x^2$ | `x^2` |
| $x^{n}$ | `x^{n}` (多位上标) |
| $x_1$ | `x_1` |
| $x_{max}$ | `x_{max}` (多位下标) |
| $x^2_1$ | `x^2_1` |
| $^{12}C_6$ | `^{12}C_6` |
| $\binom{n}{k}$ | `\binom{n}{k}` |
| $\binom{x}{y}$ | `\binom{x}{y}` |

### 3.5 求和、积分、极限

| 表达式 | 命令 |
|--------|------|
| $\sum_{i=1}^{n} x_i$ | `\sum_{i=1}^{n} x_i` |
| $\sum x$ | `\sum x` |
| $\prod_{i=1}^{n} x_i$ | `\prod_{i=1}^{n} x_i` |
| $\prod x$ | `\prod x` |
| $\coprod_{i=1}^{n} x_i$ | `\coprod_{i=1}^{n} x_i` |
| $\int_{a}^{b} f(x)dx$ | `\int_{a}^{b} f(x)dx` |
| $\int f(x)dx$ | `\int f(x)dx` |
| $\iint$ | `\iint` |
| $\iiint$ | `\iiint` |
| $\oint$ | `\oint` |
| $\lim_{x \to \infty} f(x)$ | `\lim_{x \to \infty} f(x)` |
| $\lim x$ | `\lim x` |

---

## 四、关系符号

### 4.1 基本关系符

| 符号 | 命令 | 说明 |
|------|------|------|
| = | `=` | 等于 |
| ≠ | `\neq` 或 `\ne` | 不等于 |
| ≈ | `\approx` | 约等于 |
| ≡ | `\equiv` | 恒等于 |
| ≅ | `\cong` | 全等于 |
| ∝ | `\propto` | 成比例 |
| < | `<` | 小于 |
| > | `>` | 大于 |
| ≤ | `\leq` 或 `\le` | 小于等于 |
| ≥ | `\geq` 或 `\ge` | 大于等于 |
| ≪ | `\ll` | 远小于 |
| ≫ | `\gg` | 远大于 |
| ≺ | `\prec` | 先于 |
| ≻ | `\succ` | 后于 |
| ⪯ | `\preceq` | 先于等于 |
| ⪰ | `\succeq` | 后于等于 |

### 4.2 逻辑符号

| 符号 | 命令 | 说明 |
|------|------|------|
| ∈ | `\in` | 属于 |
| ∉ | `\notin` | 不属于 |
| ∋ | `\ni` 或 `\owns` | 包含 |
| ∌ | `\not\ni` | 不包含 |
| ⊂ | `\subset` | 子集 |
| ⊃ | `\supset` | 超集 |
| ⊆ | `\subseteq` | 子集等于 |
| ⊇ | `\supseteq` | 超集等于 |
| ⊄ | `\not\subset` | 非子集 |
| ∪ | `\cup` | 并集 |
| ∩ | `\cap` | 交集 |
| ∅ | `\emptyset` 或 `\varnothing` | 空集 |
| ∧ | `\land` | 逻辑与 |
| ∨ | `\lor` | 逻辑或 |
| ¬ | `\lnot` 或 `\neg` | 逻辑非 |
| ∀ | `\forall` | 全称量词 |
| ∃ | `\exists` | 存在量词 |
| ∄ | `\nexists` | 不存在 |

---

## 五、箭头符号

| 符号 | 命令 | 说明 |
|------|------|------|
| → | `\rightarrow` 或 `\to` | 右箭头 |
| ← | `\leftarrow` | 左箭头 |
| ↔ | `\leftrightarrow` | 左右箭头 |
| ⇒ | `\Rightarrow` | 双重右箭头 |
| ⇐ | `\Leftarrow` | 双重左箭头 |
| ⇔ | `\Leftrightarrow` | 双重左右箭头 |
| ↦ | `\mapsto` | 映射箭头 |
| ↪ | `\hookrightarrow` | 插入箭头 |
| ↩ | `\hookleftarrow` | 钩左箭头 |
| ⊸ | `\multimap` | 多重映射 |
| ⇀ | `\rightharpoonup` | 右半钩 |
| ⇁ | `\rightharpoondown` | 右下钩 |
| ↗ | `\nearrow` | 右上箭头 |
| ↘ | `\searrow` | 右下箭头 |
| ↙ | `\swarrow` | 左下箭头 |
| ↖ | `\nwarrow` | 左上箭头 |
| ⟶ | `\longrightarrow` | 长右箭头 |
| ⟵ | `\longleftarrow` | 长左箭头 |
| ⟷ | `\longleftrightarrow` | 长左右箭头 |
| ⟹ | `\Longrightarrow` | 长双重右箭头 |
| ⟸ | `\Longleftarrow` | 长双重左箭头 |
| ⟺ | `\Longleftrightarrow` | 长双重左右箭头 |
| ⟼ | `\longmapsto` | 长映射箭头 |

---

## 六、装饰符

### 6.1 顶部装饰

| 表达式 | 命令 |
|--------|------|
| $\hat{x}$ | `\hat{x}` |
| $\widehat{xyz}$ | `\widehat{xyz}` |
| $\bar{x}$ | `\bar{x}` |
| $\overline{xyz}$ | `\overline{xyz}` |
| $\vec{x}$ | `\vec{x}` |
| $\overrightarrow{AB}$ | `\overrightarrow{AB}` |
| $\overleftarrow{AB}$ | `\overleftarrow{AB}` |
| $\tilde{x}$ | `\tilde{x}` |
| $\widetilde{xyz}$ | `\widetilde{xyz}` |
| $\dot{x}$ | `\dot{x}` |
| $\ddot{x}$ | `\ddot{x}` |
| $\dddot{x}$ | `\dddot{x}` |
| $\overline{a+b}$ | `\overline{a+b}` |
| $\underline{a+b}$ | `\underline{a+b}` |
| $\overbrace{a+b}$ | `\overbrace{a+b}` |
| $\underbrace{a+b}$ | `\underbrace{a+b}` |
| $a + \overbrace{b + c}$ | `a + \overbrace{b + c}` |
| $a + \underbrace{b + c}$ | `a + \underbrace{b + c}` |

### 6.2 底部装饰

| 表达式 | 命令 |
|--------|------|
| $\underset{x}{y}$ | `\underset{x}{y}` |
| $\underset{below}{above}$ | `\underset{below}{above}` |

---

## 七、矩阵

### 7.1 基本矩阵

**小括号矩阵** `matrix`：
```latex
\begin{matrix}
1 & 2 \\
3 & 4
\end{matrix}
```

输出：$\begin{matrix}1 & 2 \\ 3 & 4\end{matrix}$

**中括号矩阵** `bmatrix`：
```latex
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
```

输出：$\begin{bmatrix}1 & 2 \\ 3 & 4\end{bmatrix}$

**大括号矩阵** `Bmatrix`：
```latex
\begin{Bmatrix}
1 & 2 \\
3 & 4
\end{Bmatrix}
```

### 7.2 其他分隔符

| 类型 | 命令 | 示例输出 |
|------|------|---------|
| 圆括号 | `pmatrix` | $\begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix}$ |
| 方括号 | `bmatrix` | $\begin{bmatrix}1 & 2 \\ 3 & 4\end{bmatrix}$ |
| 大括号 | `Bmatrix` | $\begin{Bmatrix}1 & 2 \\ 3 & 4\end{Bmatrix}$ |
| 竖线 | `vmatrix` | $\begin{vmatrix}1 & 2 \\ 3 & 4\end{vmatrix}$ |
| 双竖线 | `Vmatrix` | $\begin{Vmatrix}1 & 2 \\ 3 & 4\end{Vmatrix}$ |

### 7.3 省略矩阵

| 命令 | 说明 |
|------|------|
| `\cdots` | 水平省略 $\cdots$ |
| `\vdots` | 垂直省略 $\vdots$ |
| `\ddots` | 对角省略 $\ddots$ |
| `\iddots` | 反对角省略 (需要 extpfeil) |

```latex
\begin{matrix}
1 & 2 & \cdots & n \\
\vdots & \vdots & \ddots & \vdots \\
m & m & \cdots & 1
\end{matrix}
```

### 7.4 行列式

```latex
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
```

输出：$\begin{vmatrix}a & b \\ c & d\end{vmatrix} = ad - bc$

---

## 八、方程组

### 8.1 align 环境（对齐）

```latex
\begin{align}
a &= b + c \\
  &= d + e + f
\end{align}
```

输出：
$\begin{align}
a &= b + c \\
  &= d + e + f
\end{align}$

### 8.2 cases 环境（分段函数）

```latex
f(x) = 
\begin{cases}
x^2 & \text{if } x \geq 0 \\
0 & \text{if } x < 0
\end{cases}
```

输出：$f(x) = \begin{cases}x^2 & \text{if } x \geq 0 \\ 0 & \text{if } x < 0\end{cases}$

---

## 九、字体

| 表达式 | 命令 | 说明 |
|--------|------|------|
| $\mathbf{A}$ | `\mathbf{A}` | 黑体 |
| $\mathbf{x}$ | `\mathbf{x}` | 黑体 |
| $\mathbb{A}$ | `\mathbb{A}` | 黑板粗体 |
| $\mathcal{A}$ | `\mathcal{A}` | 手写体 |
| $\mathfrak{A}$ | `\mathfrak{A}` | 哥特体 |
| $\mathsf{A}$ | `\mathsf{A}` | sans-serif |
| $\mathrm{A}$ | `\mathrm{A}` | 直立体 |
| $\mathit{A}$ | `\mathit{A}` | 斜体 |

**数字粗体**：
- `\Bbb 1` 或 `\mathbb{1}`

---

## 十、间距

### 10.1 水平间距

| 命令 | 说明 | 效果 |
|------|------|------|
| `a\,b` | 紧间隔 | $a\,b$ |
| `a\:b` | 中等间隔 | $a\:b$ |
| `a\;b` | 宽间隔 | $a\;b$ |
| `a\ b` | 普通间隔 | $a\ b$ |
| `a\quad b` | 四分之一 em | $a\quad b$ |
| `a\qquad b` | 半 em | $a\qquad b$ |
| `a\!b` | 负间隔（收紧） | $a\!b$ |

### 10.2 垂直间距

| 命令 | 说明 |
|------|------|
| `\newline` | 换行 |
| `\\` | 强制换行 |
| `\blank` | 垂直空白 |

---

## 十一、常见公式示例

### 11.1 二次公式

```latex
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
```

输出：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### 11.2 欧拉公式

```latex
e^{i\pi} + 1 = 0
```

输出：$e^{i\pi} + 1 = 0$

### 11.3 傅里叶变换

```latex
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} dx
```

输出：$\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} dx$

### 11.4 行列式

```latex
\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}
```

输出：$\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$

### 11.5 矩阵乘法

```latex
(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
```

输出：$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$

---

## 十二、在 JavaScript 中使用

### 12.1 基本渲染

```javascript
// 渲染到指定元素
katex.render("c = \\pm\\sqrt{a^2 + b^2}", element, {
  throwOnError: false,
  displayMode: true
});
```

### 12.2 自动渲染

```javascript
renderMathInElement(document.body, {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '$', right: '$', display: false},
    {left: '\\[', right: '\\]', display: true},
    {left: '\\(', right: '\\)', display: false}
  ],
  throwOnError: false
});
```

### 12.3 错误处理

```javascript
try {
  katex.render("invalid \\syntax", element);
} catch (e) {
  console.error('KaTeX error:', e.message);
}
```

---

## 十三、VS Code 插件推荐

| 插件 | 说明 |
|------|------|
| **KaTeX Preview** | 实时预览 KaTeX 公式 |
| **Markdown+Math** | 在 Markdown 中渲染数学公式 |
| **Math to Image** | 将公式导出为图片 |

---

## 十四、参考资料

- [KaTeX 官方文档](https://katex.org/docs/supported.html)
- [KaTeX 支持的符号列表](https://katex.org/docs/supported_table.html)
- [LaTeX 数学符号大全](https://oeis.org/wiki/LaTeX_Math_Symbols)
