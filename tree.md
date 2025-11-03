::: mermaid
graph TD;
  A[html];
  A --> B[head];
  B --> B1[meta];
  B --> B2[meta];
  B --> B3[title];

  A --> C[body];

  %% NAV
  C --> C1[nav];
  C1 --> C1a[a];
  C1 --> C1b[a];
  C1 --> C1c[a];
  C1 --> C1d[a];

  %% MAIN
  C --> D[main];

  %% HOME
  D --> D1[section];
  D1 --> D1a[div];
  D1a --> D1a1[img];
  D1 --> D1b[div];
  D1b --> D1b1[h1];
  D1b1 --> D1b1a[aside];
  D1b --> D1b2[h2];

  %% ABOUT
  D --> D2[section];
  D2 --> D2a[h1];
  D2 --> D2b[p];
  D2b --> D2b1[strong];
  D2b --> D2b2[strong];

  %% PROFILE
  D --> D3[section];
  D3 --> D3a[h1];
  D3 --> D3b[div];
  D3b --> D3b1[dl];
  D3b1 --> D3b1a[dt];
  D3b1 --> D3b1b[dd];
  D3b1 --> D3b1c[dt];
  D3b1 --> D3b1d[dd];
  D3b1 --> D3b1e[dt];
  D3b1 --> D3b1f[dd];
  D3b1 --> D3b1g[dt];
  D3b1 --> D3b1h[dd];
  D3b1 --> D3b1i[dt];
  D3b1 --> D3b1j[dd];
  D3b1 --> D3b1k[dt];
  D3b1 --> D3b1l[dd];

  %% SKILL
  D --> D4[section];
  D4 --> D4a[div];
  D4a --> D4a1[h1];
  D4a --> D4a2[p];
  D4a --> D4a3[ul];
  D4a3 --> L1[li];
  D4a3 --> L2[li];
  D4a3 --> L3[li];
  D4a3 --> L4[li];
  D4a3 --> L5[li];
  D4a3 --> L6[li];

  %% FOOTER
  C --> E[footer];
  E --> E1[p];
:::