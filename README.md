{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 AppleColorEmoji;\f2\fnil\fcharset0 LucidaGrande;
\f3\fnil\fcharset128 HiraginoSans-W3;}
{\colortbl;\red255\green255\blue255;\red185\green188\blue186;\red69\green83\blue77;\red226\green227\blue220;
\red19\green20\blue20;\red226\green227\blue220;\red69\green83\blue77;\red44\green171\blue185;\red111\green144\blue176;
\red191\green80\blue83;\red132\green134\blue132;\red226\green227\blue220;\red162\green127\blue173;\red166\green178\blue85;
}
{\*\expandedcolortbl;;\cssrgb\c77255\c78431\c77647;\cssrgb\c34118\c39608\c37647\c10196;\cssrgb\c90980\c90980\c89020;
\cssrgb\c9804\c10196\c10196;\cssrgb\c90980\c90980\c89020\c54902;\cssrgb\c34118\c39608\c37647\c20000;\cssrgb\c19216\c72157\c77647;\cssrgb\c50588\c63529\c74510;
\cssrgb\c80000\c40000\c40000;\cssrgb\c58824\c59608\c58824;\cssrgb\c90989\c90989\c88934\c10000;\cssrgb\c69804\c58039\c73333;\cssrgb\c70980\c74118\c40784;
}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid101\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
# 
\f1 \uc0\u55358 \u56810 
\f0  DSAlgo Playwright-BDD Test Framework\
\
Comprehensive BDD test automation framework for the [DSAlgo Portal](https://dsportalapp.herokuapp.com) application using Playwright, playwright-bdd, and Allure reporting.\
\
## 
\f1 \uc0\u10024 
\f0  Features\
\
- 
\f1 \uc0\u9989 
\f0  **BDD Testing** - Gherkin scenarios with playwright-bdd\
- 
\f1 \uc0\u9989 
\f0  **Data-Driven** - Excel-based test data management\
- 
\f1 \uc0\u9989 
\f0  **Allure Reports** - Beautiful, interactive test reports\
- 
\f1 \uc0\u9989 
\f0  **Parallel Execution** - Multi-worker test execution\
- 
\f1 \uc0\u9989 
\f0  **Sequential Projects** - Setup 
\f2 \uc0\u8594 
\f0  Modules 
\f2 \uc0\u8594 
\f0  Cleanup workflow\
- 
\f1 \uc0\u9989 
\f0  **Cross-Browser** - Chromium, Firefox, WebKit support\
- 
\f1 \uc0\u9989 
\f0  **Authentication** - Reusable auth state management\
\
## 
\f1 \uc0\u55357 \u56513 
\f0  Project Structure\
\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 dsalgo-playwright-bdd-framework/\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  features/ # BDD feature files\cb1 \uc0\u8232 \cb5 \uc0\u9474  
\f3 \'84\'a5
\f0 \uc0\u9472 \u9472  01_homepage.feature\cb1 \uc0\u8232 \cb5 \uc0\u9474  
\f3 \'84\'a5
\f0 \uc0\u9472 \u9472  02_register.feature\cb1 \uc0\u8232 \cb5 \uc0\u9474  
\f3 \'84\'a5
\f0 \uc0\u9472 \u9472  03_signin.feature\cb1 \uc0\u8232 \cb5 \uc0\u9474  
\f3 \'84\'a5
\f0 \uc0\u9472 \u9472  04_logout.feature\cb1 \uc0\u8232 \cb5 \uc0\u9474  \u9492 \u9472 \u9472  05-11_*.feature # Module tests\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  steps/ # Step definitions\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  pages/ # Page Object Models\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  fixtures/ # Test fixtures\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  testdata/ # Excel test data\cb1 \uc0\u8232 \cb5 \uc0\u9474  \u9492 \u9472 \u9472  TestData.xlsx\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  utils/ # Utilities (logger, helpers)\cb1 \uc0\u8232 
\f3 \cb5 \'84\'a5
\f0 \uc0\u9472 \u9472  playwright.config.js # Test configuration\cb1 \uc0\u8232 \cb5 \uc0\u9492 \u9472 \u9472  package.json # Dependencies & scripts\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 text
\fs28 \cf2 \cb3 \
## 
\f1 \uc0\u55357 \u56960 
\f0  Getting Started\
\
### Prerequisites\
\
- **Node.js** 18+ ([Download](https://nodejs.org/))\
- **npm** (comes with Node.js)\
- **Java** 8+ (required for Allure reports - [Download](https://www.oracle.com/java/technologies/downloads/))\
\
### Installation\
\
#### 1. Clone the Repository\
```bash\
git clone https://github.com/YOUR_USERNAME/dsalgo-playwright-bdd-framework.git\
cd dsalgo-playwright-bdd-framework\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 2. Install Dependencies\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npm install\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 3. Install Playwright Browsers\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npx playwright install\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 This downloads Chromium, Firefox, and WebKit browsers.\cb1 \
\cb5 Optional: Install specific browser only\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npx playwright install chromium\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 4. Install System Dependencies (Linux/CI only)\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npx playwright install-deps\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 5. Verify Installation\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npx playwright --version\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Expected output: 
\fs28 \cb7 Version 1.49.0
\fs32 \cb5  or higher\cb1 \
\cb5 Configuration\cb1 \
\cb5 Set base URL (optional - defaults to {\field{\*\fldinst{HYPERLINK "https://dsportalapp.herokuapp.com/"}}{\fldrslt \cf8 https://dsportalapp.herokuapp.com}}):\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 export\cf2  \cf10 BASE_URL\cf2 =https://dsportalapp.herokuapp.com\
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55358 \u56810 
\f0  Running Tests\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Recommended Commands\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # 
\f1 \uc0\u55356 \u57263 
\f0  Run all tests + auto-open Allure report (RECOMMENDED)\cf2 \
npm run test:report\
\
\cf11 # Run all tests\cf2 \
npm \cf9 test\cf2 \
\
\cf11 # Quick run (skip BDD regeneration)\cf2 \
npm run test:quick\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Project-Specific Tests\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npm run test:setup      \cf11 # Setup only (register + signin)\cf2 \
npm run test:modules    \cf11 # All data structure modules\cf2 \
npm run test:cleanup    \cf11 # Cleanup only (logout)\cf2 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Tagged Tests\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npm run test:smoke       \cf11 # Smoke tests only\cf2 \
npm run test:regression  \cf11 # Regression suite\cf2 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Debug & UI Mode\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npm run test:debug    \cf11 # Debug mode with step-by-step execution\cf2 \
npm run test:ui       \cf11 # Playwright UI mode\cf2 \
npm run test:headed   \cf11 # Run with visible browser\cf2 \
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u56522 
\f0  View Reports\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Allure Reports (Recommended)\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Auto-generated and opened after: npm run test:report\cf2 \
\
\cf11 # Or manually serve last test results\cf2 \
npx allure serve allure-results\
\
\cf11 # Generate static HTML report\cf2 \
npm run allure:generate\
npm run allure:open\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Playwright HTML Report\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 npm run report\
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u56520 
\f0  Test Modules\cb1 \

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrt\brdrnil \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth1794\clftsWidth3 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt \clshdrawnil \clwWidth5937\clftsWidth3 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt \clshdrawnil \clwWidth6649\clftsWidth3 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs28 \cf4 \cb5 Module\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Feature File\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Description\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Setup\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 02_register.feature
\fs28 \cb5 , 
\fs24\fsmilli12250 \cb7 03_signin.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 User registration and authentication\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Homepage\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 01_homepage.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Homepage navigation\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Array\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 05_array.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Array data structure tests with practice questions\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Linked List\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 06_linkedlist.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Linked list operations\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Stack\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 07_stack.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Stack operations\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Queue\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 08_queue.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Queue operations\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Tree\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 09_tree.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Tree traversal tests\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Graph\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 10_graph.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Graph algorithms\cb1 \cell \row

\itap1\trowd \taflags0 \trgaph108\trleft-108 \tamart280 \tamarb280 \trbrdrl\brdrs\brdrw20\brdrcf12 \trbrdrt\brdrnil \trbrdrr\brdrnil 
\clvertalt\clvertalbase \clshdrawnil \clwWidth1794\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx2880
\clvertalt\clvertalbase \clshdrawnil \clwWidth5937\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx5760
\clvertalt\clvertalbase \clshdrawnil \clwWidth6649\clftsWidth3 \clminw960 \clmart10 \clmarl10 \clmarb10 \clmarr10 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrs\brdrw20\brdrcf12 \clbrdrr\brdrs\brdrw20\brdrcf12 \clpadt160 \clpadl160 \clpadb160 \clpadr160 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 Cleanup\cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0

\fs24\fsmilli12250 \cf4 \cb7 04_logout.feature
\fs28 \cb1 \cell 
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf4 \cb5 User logout\cb1 \cell \lastrow\row
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u57056 \u65039 
\f0  Tech Stack\cb1 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa160\partightenfactor0
\ls1\ilvl0
\fs32 \cf8 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}{\field{\*\fldinst{HYPERLINK "https://playwright.dev/"}}{\fldrslt \expnd0\expndtw0\kerning0
Playwright}}\cf4 \expnd0\expndtw0\kerning0
 v1.49+ - Browser automation\cb1 \
\ls1\ilvl0\cf8 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}{\field{\*\fldinst{HYPERLINK "https://github.com/vitalets/playwright-bdd"}}{\fldrslt \expnd0\expndtw0\kerning0
playwright-bdd}}\cf4 \expnd0\expndtw0\kerning0
 - BDD integration\cb1 \
\ls1\ilvl0\cf8 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}{\field{\*\fldinst{HYPERLINK "https://allurereport.org/"}}{\fldrslt \expnd0\expndtw0\kerning0
Allure Report}}\cf4 \expnd0\expndtw0\kerning0
 - Interactive test reporting\cb1 \
\ls1\ilvl0\cf8 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}{\field{\*\fldinst{HYPERLINK "https://www.npmjs.com/package/xlsx"}}{\fldrslt \expnd0\expndtw0\kerning0
XLSX}}\cf4 \expnd0\expndtw0\kerning0
 - Excel data handling\cb1 \
\ls1\ilvl0\cf8 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}{\field{\*\fldinst{HYPERLINK "https://www.npmjs.com/package/winston"}}{\fldrslt \expnd0\expndtw0\kerning0
Winston}}\cf4 \expnd0\expndtw0\kerning0
 - Structured logging\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u56541 
\f0  Writing Tests\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Feature File Example\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 text
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 Feature: Array Module\
\
  Background:\
    Given The user is logged in\
\
  @array @smoke\
  Scenario: User navigates to Array page\
    Given The user is on the homepage\
    When The user clicks on "Get Started" button for "Array"\
    Then The user should be redirected to "Array" page\
\
  @array @regression\
  Scenario: User tests Try Here editor with valid code\
    Given The user is on "Arrays in Python" page in Array\
    When The user clicks "Try Here" button\
    And The user enters valid Python code from "EditorTest" sheet row 0\
    And The user clicks Run button\
    Then The user should see the output matching expected result\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Step Definition Example\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 javascript
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf13 \cb3 import\cf2  \{ Given, When, Then \} \cf13 from\cf2  \cf14 './fixtures/testFixtures.js'\cf2 ;\
\
Given(\cf14 'The user is on the homepage'\cf2 , \cf13 async\cf2  (\{ page \}) => \{\
  \cf13 await\cf2  page.goto(\cf14 '/'\cf2 );\
\});\
\
When(\cf14 'The user clicks on "Get Started" button for \{string\}'\cf2 , \cf13 async\cf2  (\{ page \}, module) => \{\
  \cf13 await\cf2  page.click(\cf14 `text=\cf2 $\{module\}\cf14  >> ../following-sibling::button`\cf2 );\
\});\
\
Then(\cf14 'The user should be redirected to \{string\} page'\cf2 , \cf13 async\cf2  (\{ page \}, moduleName) => \{\
  \cf13 await\cf2  expect(page).toHaveURL(\cf13 new\cf2  \cf9 RegExp\cf2 (moduleName.toLowerCase()));\
\});\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Adding Test Data\cb1 \
\cb5 Edit 
\fs28 \cb7 testdata/TestData.xlsx
\fs32 \cb5 :\cb1 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa160\partightenfactor0
\ls2\ilvl0\cf4 \cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
EditorTest sheet - Code snippets for editor testing\cb1 \
\ls2\ilvl0\cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
ArrayPracticeSolutions sheet - Practice question solutions\cb1 \
\ls2\ilvl0\cb5 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Add new sheets for additional test data\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55358 \u56825 
\f0  Maintenance\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Clean all reports and generated files\cf2 \
npm run clean\
\
\cf11 # Clean reports only (keeps .features-gen)\cf2 \
npm run clean:reports\
\
\cf11 # Regenerate BDD specs from features\cf2 \
npm run bddgen\
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u56615 
\f0  Troubleshooting\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Common Issues\cb1 \
\cb5 Issue: 
\fs28 \cb7 Error: No tests found
\fs32 \cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Solution: Regenerate BDD specs\cf2 \
npm run bddgen\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Issue: Browser not found\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Solution: Reinstall browsers\cf2 \
npx playwright install --force\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Issue: Allure report doesn't open automatically\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Solution: Check Java installation\cf2 \
java -version\
\
\cf11 # Manual serve\cf2 \
npx allure serve allure-results\
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 Issue: Authentication fails\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 bash
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 # Solution: Clear auth state and retry\cf2 \
rm -rf .auth/\
npm run test:setup\
\pard\pardeftab720\sa160\partightenfactor0

\f1\fs36 \cf4 \cb5 \uc0\u55357 \u56520 
\f0  CI/CD Ready\cb1 \
\pard\pardeftab720\sa160\partightenfactor0

\fs32 \cf4 \cb5 The framework is configured for GitHub Actions and Jenkins integration.\cb1 \
\cb5 GitHub Actions Example\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf4 \cb3 \
\pard\pardeftab720\partightenfactor0

\fs24 \cf6 \cb7 text
\fs28 \cf4 \cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 - name: Run tests\
  run: npm test\
\
- name: Generate Allure Report\
  if: always()\
  run: npx allure generate allure-results --clean -o allure-report\
\
- name: Upload Report\
  uses: actions/upload-artifact@v4\
  with:\
    name: allure-report\
    path: allure-report/\
}