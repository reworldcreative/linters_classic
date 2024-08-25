import globals from 'globals'
import html from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import pluginJs from '@eslint/js'

export default [
  // JS config
  {
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    rules: {
      eqeqeq: ['error', 'always'],
      quotes: ['warn', 'single'],
      camelcase: ['error', { ignoreImports: true }],
      /* eslint-disable-next-line no-magic-numbers */
      complexity: ['error', 6],
      curly: ['error', 'multi-or-nest'],
      'for-direction': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-imports': 'error',
      'no-invalid-regexp': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-shadow': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'default-case': 'error',
      'no-alert': 'warn',
      'no-bitwise': 'error',
      'no-empty-static-block': 'error',
      'no-eq-null': 'error',
      'no-extra-label': 'error',
      'no-label-var': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-undef-init': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-empty-function': ['error', { allow: ['setters', 'constructors'] }],
      'no-magic-numbers': [
        'error',
        {
          ignore: [0, 1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          detectObjects: false,
        },
      ],
      // 'sort-imports': [
      //   'error',
      //   {
      //     ignoreCase: false,
      //     ignoreDeclarationSort: false,
      //     ignoreMemberSort: false,
      //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      //     allowSeparatedGroups: false,
      //   },
      // ],
      // 'sort-vars': 'error',
      'vars-on-top': 'error',
    },
  },

  // HTML config
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
    },
    rules: {
      // '@html-eslint/attrs-newline': [
      //   'error',
      //   {
      //     closeStyle: 'newline',
      //     ifAttrsMoreThan: 3,
      //   },
      // ],
      '@html-eslint/no-restricted-attr-values': [
        'error',
        {
          attrPatterns: ['class'],
          attrValuePatterns: [
            '\\b(_{0,2})?(-{0,2})?([bB][oO][lL][dD]|[bB][oO][lL][dD][eE][rR]|[lL][iI][gG][hH]|[lL][iI][gG][hH][tT][eE][rR]|[nN][oO][rR][mM][aA][lL]|[iI][tT][aA][lL][iI][cC]|[oO][bB][lL][iI][qQ][uU][eE]|[uU][nN][dD][eE][rR][lL][iI][nN][eE]|[lL][iI][nN][eE]-[tT][hH][rR][oO][uU][gG][hH]|[oO][vV][eE][rR][lL][iI][nN][eE]|[wW][iI][dD][eE]|[nN][aA][rR][rR][oO][wW]|[tT][aA][lL][lL]|[sS][hH][oO][rR][tT]|[rR][eE][lL][aA][tT][iI][vV][eE]|[aA][bB][sS][oO][lL][uU][tT][eE]|[rR][eE][dD]|[bB][lL][uU][eE]|[gG][rR][eE][eE][nN]|[yY][eE][lL][lL][oO][wW]|[pP][uU][rR][pP][lL][eE]|[oO][rR][aA][nN][gG][eE]|[pP][iI][nN][kK]|[bB][lL][aA][cC][kK]|[wW][hH][iI][tT][eE]|[gG][rR][aA][yY]|[lL][iI][gG][hH][tT][gG][rR][aA][yY]|[dD][aA][rR][kK][gG][rR][aA][yY]|[bB][rR][oO][wW][nN]|[cC][yY][aA][nN]|[mM][aA][gG][eE][nN][tT][aA])(_{0,2})?(-{0,2})?\\b',
          ],
          // attrValuePatterns: [
          //   '\\b(_{0,2})?(-{0,2})?(bold|Bold|BOLD|bolder|BOLDER|Bolder|ligh|LIGHT|Light|lighter|LIGHTER|Lighter|normal|NORMAL|Normal|italic|ITALIC|Italic|oblique|OBLIQUE|Oblique|underline|UNDERLINE|Underline|line-through|LINE-THROUGH|Line-through|overline|OVERLINE|Overline|wide|WIDE|Wide|narrow|NARROW|Narrow|tall|TALL|Tall|short|SHORT|Short|relative|RELATIVE|Relative|absolute|ABSOLUTE|Absolute|red|RED|Red|blue|BLUE|Blue|green|GREEN|Green|yellow|YELLOW|Yellow|purple|PURPLE|Purple|orange|ORANGE|Orange|pink|PINK|Pink|black|BLACK|Black|white|WHITE|White|gray|GRAY|Gray|lightgray|LIGHTGRAY|Lightgray|darkgray|DARKGRAY|Darkgray|brown|BROWN|Brown|cyan|CYAN|Cyan|magenta|MAGENTA|Magenta)(_{0,2})?(-{0,2})?\\b',
          // ],
          message: 'One of the ClassName is in restricted list',
        },
        {
          attrPatterns: ['class'],
          attrValuePatterns: [
            '[a-zA-Z]+(_{3,}|-{3,})',
            '(_|-)$',
            '[a-zA-Z]+(_|-{2})[a-zA-Z]+(_|-{2})',
            '[a-zA-Z]+(__)[a-zA-Z]+(__)',
            '[^a-zA-Z_\\-\\s]',
          ],
          message: 'Class pattern must match BEM',
        },
        {
          attrPatterns: ['id'],
          attrValuePatterns: ['[^a-zA-Z_\\-\\s]'],
          message: 'Incorrect ID pattern',
        },
      ],
      '@html-eslint/element-newline': [
        'error',
        {
          skip: ['p', 'span'],
        },
      ],
      '@html-eslint/no-extra-spacing-attrs': ['error', { disallowMissing: true }],
      '@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
      '@html-eslint/no-target-blank': 'warn',
      '@html-eslint/no-duplicate-attrs': 'error',
      '@html-eslint/no-duplicate-id': 'error',
      '@html-eslint/no-inline-styles': 'warn',
      '@html-eslint/no-obsolete-tags': 'error',
      '@html-eslint/no-script-style-type': 'error',
      '@html-eslint/require-button-type': 'warn',
      '@html-eslint/require-closing-tags': 'error',
      '@html-eslint/require-doctype': 'error',
      '@html-eslint/require-li-container': 'error',
      '@html-eslint/no-multiple-h1': 'error',
      '@html-eslint/no-skip-heading-levels': 'error',
      '@html-eslint/require-lang': 'warn',
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/require-meta-description': 'error',
      '@html-eslint/require-title': 'error',
      '@html-eslint/require-img-alt': 'error',
      '@html-eslint/lowercase': 'error',
      '@html-eslint/no-positive-tabindex': 'error',
      '@html-eslint/sort-attrs': [
        'warn',
        {
          priority: [
            'action',
            'rel',
            'src',
            'href',
            'target',
            'type',
            'srcset',
            'media',
            'alt',
            'id',
            'type',
            'class',
            'name',
            'content',
            'accept',
            'width',
            'height',
            'style',
          ],
        },
      ],
    },
    languageOptions: {
      parser: htmlParser,
    },
  },
]
