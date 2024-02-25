<style>
  * {
      margin: 0;
      padding: 0;
      color: inherit;
      text-decoration: none;
      list-style: none;
      outline: none;
      box-sizing: border-box;
    }

    .body {
      --color-main: #2D00F7;
      --color-primary: #6A00F4;
      --color-secondary: #8900F2;
      --color-text: #e6f2ff;
      --color-background: #0d1117;
      --color-background-secondary: rgba( 13, 17, 23, 0.95);
      --color-link: #DB00B6;
      --color-link-active: #8900F2;

      height: 100%;
      width: 100%;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;

      background-image: radial-gradient(var(--color-main), var(--color-primary), var(--color-secondary));
      animation: border 5s linear infinite;
      background-size: 100% 100%;
      background-position: 0 0;
      border: 24px solid;
      border-color: var(--color-background);
    }

    .container {
      background: var(--color-background-secondary);
      box-shadow: 0 4px 30px rgba( 0, 0, 0, 0.5);
      backdrop-filter: blur( 23px );
      border: 1px solid rgba( 13, 17, 23, 1);
      height: calc(100% - 10px);
      width: calc(100% - 10px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
</style>
<img src="readme.svg" width="100%" height="100%" alt="readme.md custom css"/>
<div class="body">
  <div class="container">
    <a href="https://github.com/AReid987/career-compass">
      <img src="https://img.stackshare.io/repo.svg"  alt="StackShare logo" />
      AReid987/career-compass
    </a>
    <img alt="GitHub package.json dynamic" src="https://img.shields.io/github/package-json/name/areid987/career-compass?style=plastic">
    <img alt="GitHub package.json dynamic" src="https://img.shields.io/github/package-json/version/areid987/career-compass?style=plastic">
    <img alt="GitHub License" src="https://img.shields.io/github/license/areid987/career-compass?style=plastic&logo=github"/>
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/areid987/career-compass?style=plastic">
    <img alt="GitHub repo file or directory count" src="https://img.shields.io/github/directory-file-count/areid987/career-compass?style=plastic">
    <img alt="Depfu" src="https://img.shields.io/depfu/dependencies/github/AReid987%2Fcareer-compass?style=plastic">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/areid987/career-compass?style=plastic">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/areid987/career-compass?style=plastic&logo=github"/>
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues-pr/areid987/career-compass?style=plastic&logo=github">
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/areid987/career-compass?style=plastic&logo=github">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/areid987/career-compass?style=plastic&logo=github"/>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/areid987/career-compass/autofix.yml?style=plastic&logo=github&label=autofix%20%7C%20build"/>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/areid987/career-compass/ci.yml?style=plastic&logo=github&label=ci%20%7C%20build"/>
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/areid987/career-compass/mega-linter.yml?style=plastic&logo=github&label=mega-linter%20%7C%20build"/>
    <img alt="Bit Components" src="https://img.shields.io/bit/collection/total-components/areid987/career-compass?style=plastic&logo=bit">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/a086df3a73fe4b8397c74d168684b0bb?style=plastic&logo=codacy">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/areid987/career-compass?style=plastic&logo=CodeCov">
    <img src="https://codecov.io/gh/AReid987/career-compass/graphs/tree.svg?token=CNQCMUNUIW"/>
  </div>
</div>

<!-- <svg fill="none" viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
<div xmlns="http://www.w3.org/1999/xhtml">
<style>
    * {
      margin: 0;
      padding: 0;
      color: inherit;
      text-decoration: none;
      list-style: none;
      outline: none;
      box-sizing: border-box;
    }
    body {
      --color-main: #ff9b71
    }
    @keyframes hi  {
      0% { transform: rotate( 0.0deg) }
      10% { transform: rotate(14.0deg) }
      20% { transform: rotate(-8.0deg) }
      30% { transform: rotate(14.0deg) }
      40% { transform: rotate(-4.0deg) }
      50% { transform: rotate(10.0deg) }
      60% { transform: rotate( 0.0deg) }
      100% { transform: rotate( 0.0deg) }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .container {
      --color-main: #54009e;
      --color-primary: #ff1493;
      --color-secondary: #1e90ff;
      --color-tertiary: #fffaf0;

      background: linear-gradient(-45deg, var(--color-main), var(--color-primary), var(--color-secondary), var(--color-tertiary));
      background-size: 100% 100%;
      animation: gradient 15s ease infinite;

      width: 100%;
      height: auto;

      display: flex;
      justify-content: center;
      align-content: center;
      color: white;

      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .hi {
      animation: hi 1.5s linear -0.5s infinite;
      display: inline-block;
      transform-origin: 70% 70%;
    }

    .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .table {
      border-box: 1px solid #333;
      border: solid;
      border-color: #000;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      margin: 2rem;
      padding: 1rem 1rem;
      text-align: center;
      width: 100%;
      border-radius: 10px;
    }

    .table td:not(:last-child) {
      border-right: 1px solid #000;
      }

    .repo-badge {
      background-image: url(https://img.stackshare.io/repo.svg);
    }

    @media (prefers-color-scheme: light) {
      .container {
        --color-main: #F15BB5;
        --color-primary: #24b0ef;
        --color-secondary: #4526f6;
        --color-tertiary: #f6f645;
      }
    }

    @media (prefers-reduced-motion) {
      .container {
        animation: none;
      }

      .hi {
        animation: none;
      }
    }

</style>

<div class="container">
  <div class="column">
    <h2 style="border: solid 2px rgba(0, 0, 0, 0.4); padding: 1rem; border-radius: 12px; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);">
      Hi, I'm Antonio
    <div class="hi">
      👋
    </div>
    </h2>
    <ul align="left">
      <li>
        💻 Software Engineer
      </li>
      <li>
        📚 Lifelong Learner
      </li>
    </ul>
    <h1>Career Compass</h1>
    <p style="color: #ccc;"><em>Navigate to your next role with AI</em></p>
    <div style="border: solid 1px; border-color: rgba(255,255,255,0.2); padding: 4px; border-radius: 6px; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);">
      <a href="https://github.com/AReid987/career-compass" style="color:#000">
        <img src="https://img.stackshare.io/repo.svg"  alt="StackShare logo" />
        AReid987/career-compass
      </a>
    </div>
    <div style="margin-top: 6px;">
      <img src="https://img.stackshare.io/public_badge.svg" alt="public" />
    </div>
    <table>
      <tr>
        <td>
          <img src="https://wakatime.com/badge/github/AReid987/career-compass.svg" alt="wakatime" />
        </td>
        <td>
          <img src="http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat" alt="StackShare logo" />
        </td>
        <td>
          <img src="https://codeium.com/badges/main">
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://codeium.com/badges/user/witlessly-protected-thrasher-23768/autocomplete" />
        </td>
      </tr>
    </table>

  </div>
</div>
</div>
</foreignObject>
</svg>

[![autocomplete](https://codeium.com/badges/user/witlessly-protected-thrasher-23768/autocomplete)](https://codeium.com/profile/witlessly-protected-thrasher-23768)
[![streak](https://codeium.com/badges/v2/user/witlessly-protected-thrasher-23768/streak)](https://codeium.com/profile/witlessly-protected-thrasher-23768)

## Tech Stack

<br/><br/>
|49<br/>Tools used|02/21/24 <br/>Report generated|
|------|------|

## <img src='https://img.stackshare.io/languages.svg' alt='stackshare report'/> Languages (3)

<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'>
  <br>
  <sub><a href="http://www.typescriptlang.org">TypeScript</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'>
  <br>
  <sub><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/6727/css.png' alt='CSS 3'>
  <br>
  <sub><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS 3</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## <img src='https://img.stackshare.io/frameworks.svg'/> Frameworks (9)

<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/2202/72d087642cfce6fef6f2dabec5bf49e8_400x400.png' alt='Autoprefixer'>
  <br>
  <sub><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1163/hashtag.png' alt='ExpressJS'>
  <br>
  <sub><a href="http://expressjs.com/">ExpressJS</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/8747/4zsOyxko_400x400.jpg' alt='NestJS'>
  <br>
  <sub><a href="nestjs.com">NestJS</a></sub>
  <br>
  <sub>v10.0.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/5936/nextjs.png' alt='Next.js'>
  <br>
  <sub><a href="https://nextjs.org/">Next.js</a></sub>
  <br>
  <sub>v14.1.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png' alt='Node.js'>
  <br>
  <sub><a href="http://nodejs.org/">Node.js</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/3339/rlFcjEdI.png' alt='PostCSS'>
  <br>
  <sub><a href="https://github.com/postcss/postcss">PostCSS</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1020/OYIaJ1KK.png' alt='React'>
  <br>
  <sub><a href="https://reactjs.org/">React</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1796/984368.png' alt='RxJS'>
  <br>
  <sub><a href="http://reactivex.io/rxjs/">RxJS</a></sub>
  <br>
  <sub>v7.8.1</sub>
</td>

</tr>
<tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png' alt='Tailwind CSS'>
  <br>
  <sub><a href="https://tailwindcss.com">Tailwind CSS</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## <img src='https://img.stackshare.io/devops.svg'/> DevOps (7)

<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/3337/Q4L7Jncy.jpg' alt='ESLint'>
  <br>
  <sub><a href="http://eslint.org/">ESLint</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1046/git.png' alt='Git'>
  <br>
  <sub><a href="http://git-scm.com/">Git</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/11563/actions.png' alt='GitHub Actions'>
  <br>
  <sub><a href="https://github.com/features/actions">GitHub Actions</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/830/jest.png' alt='Jest'>
  <br>
  <sub><a href="http://facebook.github.io/jest/">Jest</a></sub>
  <br>
  <sub>v29.5.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg' alt='Prettier'>
  <br>
  <sub><a href="https://prettier.io/">Prettier</a></sub>
  <br>
  <sub>v3.0.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/no-img-open-source.png' alt='SuperTest'>
  <br>
  <sub><a href="https://www.npmjs.com/package/supertest">SuperTest</a></sub>
  <br>
  <sub>v6.3.3</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png' alt='npm'>
  <br>
  <sub><a href="https://www.npmjs.com/">npm</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## Other (3)

<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/4631/default_c2062d40130562bdc836c13dbca02d318205a962.png' alt='Shell'>
  <br>
  <sub><a href="https://en.wikipedia.org/wiki/Shell_script">Shell</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/9527/5502029.jpeg' alt='husky'>
  <br>
  <sub><a href="https://github.com/typicode/husky">husky</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/10577/11071.jpeg' alt='lint-staged'>
  <br>
  <sub><a href="https://github.com/okonet/lint-staged">lint-staged</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## <img src='https://img.stackshare.io/group.svg' /> Open source packages (27)</h2>

## <img width='24' height='24' src='https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png'/> npm (27)

| NAME                                                                                       | VERSION  | LAST UPDATED | LAST UPDATED BY | LICENSE      | VULNERABILITIES |
| :----------------------------------------------------------------------------------------- | :------- | :----------- | :-------------- | :----------- | :-------------- |
| [@nestjs/common](https://www.npmjs.com/@nestjs/common)                                     | v10.0.0  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [@nestjs/core](https://www.npmjs.com/@nestjs/core)                                         | v10.0.0  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [@nestjs/testing](https://www.npmjs.com/@nestjs/testing)                                   | v10.0.0  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [@types/express](https://www.npmjs.com/@types/express)                                     | v4.17.17 | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [@types/jest](https://www.npmjs.com/@types/jest)                                           | v29.5.2  | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [@types/node](https://www.npmjs.com/@types/node)                                           | v20.3.1  | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [@types/react](https://www.npmjs.com/@types/react)                                         | N/A      | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [@types/react-dom](https://www.npmjs.com/@types/react-dom)                                 | N/A      | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [@types/supertest](https://www.npmjs.com/@types/supertest)                                 | v6.0.0   | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/@typescript-eslint/eslint-plugin) | v7.0.0   | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [@typescript-eslint/parser](https://www.npmjs.com/@typescript-eslint/parser)               | v7.0.0   | 02/20/24     | renovate[bot]   | BSD-2-Clause | N/A             |
| [eslint-config-next](https://www.npmjs.com/eslint-config-next)                             | v14.1.0  | 02/20/24     | Antonio Reid    | N/A          | N/A             |
| [eslint-config-prettier](https://www.npmjs.com/eslint-config-prettier)                     | v9.0.0   | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [eslint-plugin-prettier](https://www.npmjs.com/eslint-plugin-prettier)                     | v5.0.0   | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [husky](https://www.npmjs.com/husky)                                                       | v9.0.11  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [lint-staged](https://www.npmjs.com/lint-staged)                                           | v15.2.2  | 02/20/24     | renovate[bot]   | MIT          | N/A             |
| [methods](https://www.npmjs.com/methods)                                                   | v1.1.2   | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [react-dom](https://www.npmjs.com/react-dom)                                               | v18.2.0  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [reflect-metadata](https://www.npmjs.com/reflect-metadata)                                 | v0.2.0   | 02/19/24     | Antonio Reid    | Apache-2.0   | N/A             |
| [source-map](https://www.npmjs.com/source-map)                                             | v0.7.4   | 02/20/24     | Antonio Reid    | BSD-3-Clause | N/A             |
| [source-map-support](https://www.npmjs.com/source-map-support)                             | v0.5.21  | 02/19/24     | Antonio Reid    | MIT          | N/A             |
| [tailwindcss](https://www.npmjs.com/tailwindcss)                                           | v3.3.0   | 02/19/24     | Antonio Reid    | MIT          | N/A             |
| [ts-jest](https://www.npmjs.com/ts-jest)                                                   | v29.1.0  | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [ts-loader](https://www.npmjs.com/ts-loader)                                               | v9.4.3   | 02/19/24     | Antonio Reid    | MIT          | N/A             |
| [ts-node](https://www.npmjs.com/ts-node)                                                   | v10.9.1  | 02/19/24     | Antonio Reid    | MIT          | N/A             |
| [tsconfig-paths](https://www.npmjs.com/tsconfig-paths)                                     | v4.2.0   | 02/20/24     | Antonio Reid    | MIT          | N/A             |
| [tslib](https://www.npmjs.com/tslib)                                                       | v2.6.2   | 02/20/24     | Antonio Reid    | 0BSD         | N/A             |

<br/>
<div align='center'>

Generated via [Stack File](https://github.com/marketplace/stack-file)

## [![Repography logo](https://images.repography.com/logo.svg)](https://repography.com) / Top contributors

[![Top contributors](https://images.repography.com/46730663/AReid987/career-compass/top-contributors/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_table.svg)](https://github.com/AReid987/career-compass/graphs/contributors)

## [![Repography logo](https://images.repography.com/logo.svg)](https://repography.com) / Recent activity [![Time period](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_badge.svg)](https://repography.com)

[![Timeline graph](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_timeline.svg)](https://github.com/AReid987/career-compass/commits)
[![Issue status graph](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_issues.svg)](https://github.com/AReid987/career-compass/issues)
[![Pull request status graph](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_prs.svg)](https://github.com/AReid987/career-compass/pulls)
[![Trending topics](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_words.svg)](https://github.com/AReid987/career-compass/commits)
[![Top contributors](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_users.svg)](https://github.com/AReid987/career-compass/graphs/contributors)
[![Activity map](https://images.repography.com/46730663/AReid987/career-compass/recent-activity/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/jiQcd3qvz0xG2xBGwwlLn19su-bkEpe509xSNfUcMds_map.svg)](https://github.com/AReid987/career-compass/commits)

## [![Repography logo](https://images.repography.com/logo.svg)](https://repography.com) / Structure

[![Structure](https://images.repography.com/46730663/AReid987/career-compass/structure/HPCNZF9qyYMXuS212zxhZMbDg2zvmHNpbjDh07PsWyo/7AKN-RtRUyvj066K5D5oX2I0U5SrrrUaK7O6i-NZ3Os_table.svg)](https://github.com/AReid987/career-compass)

## Time

Pursue mastery. Time passes incessantly. It can be only be spent. It cannot be saved. Time elapses whether you code or do not code. It is only a question of time.

Coding is a skill. It can be learned, but it can also be taught. It is a skill that can be mastered in time.

Starting: 02/22/2024
<https://wakatime.com/@AReid987/projects/ejigcxreyu>

Time spent coding this repo
[![wakatime](https://wakatime.com/badge/github/AReid987/career-compass.svg)](https://wakatime.com/badge/github/AReid987/career-compass)

Time spent coding
[![wakatime](https://wakatime.com/badge/user/018dd211-b1fc-4a37-9172-f06c7f1fa85d/project/018dd218-0cd8-4c53-9b15-f2a475fcf6b6.svg)](https://wakatime.com/badge/user/018dd211-b1fc-4a37-9172-f06c7f1fa85d/project/018dd218-0cd8-4c53-9b15-f2a475fcf6b6)

Past 30 Days
Coding Activity

<figure><embed src="https://wakatime.com/share/@AReid987/7e1cbf8a-cb3d-4419-9068-d3145134b446.svg"></embed></figure>

Languages Used

<figure><embed src="https://wakatime.com/share/@AReid987/70e6b372-1d10-44c2-b01c-b71a5ddb722e.svg"></embed></figure>

Categories

<figure><embed src="https://wakatime.com/share/@AReid987/24c22133-0335-44b9-a779-0cecd0753169.svg"></embed></figure>

![Alt text](image.png) -->
