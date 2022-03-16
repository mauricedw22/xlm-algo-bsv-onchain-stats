import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'New Analysis',
    icon: 'activity',
    subMenus: [
      {
        subMenuItems: [
          // {
          //   label: 'Email',
          //   isTitle: true,
          // },
          {
            label: 'US Federal Ratios',
            link: '/charts-graphs/apexcharts'
          },
          {
            label: 'Consumer Ratios',
            link: '/charts-graphs/apexcharts'
          },
          // {
          //   label: 'Compose',
          //   link: '/apps/email/compose'
          // },
        ]
      },
      // {
      //   subMenuItems: [
      //     {
      //       label: 'Other',
      //       isTitle: true,
      //     },
      //     {
      //       label: 'Chat',
      //       link: '/apps/chat',
      //     },
      //     {
      //       label: 'Calendar',
      //       link: '/apps/calendar',
      //       badge: {
      //         variant: 'primary',
      //         text: 'Event',
      //       }
      //     },
      //   ]
      // }
    ]
  },
  // {
  //   label: 'UI Kit',
  //   icon: 'feather',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Basic',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Accordion',
  //           link: '/ui-components/accordion',
  //         },
  //         {
  //           label: 'Alerts',
  //           link: '/ui-components/alerts',
  //         },
  //         {
  //           label: 'Badges',
  //           link: '/ui-components/badges',
  //         },
  //         {
  //           label: 'Breadcrumbs',
  //           link: '/ui-components/breadcrumbs',
  //         },
  //         {
  //           label: 'Buttons',
  //           link: '/ui-components/buttons',
  //         },
  //         {
  //           label: 'Button group',
  //           link: '/ui-components/button-group',
  //         },
  //         {
  //           label: 'Cards',
  //           link: '/ui-components/cards',
  //         },
  //         {
  //           label: 'Carousel',
  //           link: '/ui-components/carousel',
  //         },
  //         {
  //           label: 'Collapse',
  //           link: '/ui-components/collapse',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: '',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Datepicker',
  //           link: '/ui-components/datepicker',
  //         },
  //         {
  //           label: 'Dropdowns',
  //           link: '/ui-components/dropdowns',
  //         },
  //         {
  //           label: 'List group',
  //           link: '/ui-components/list-group',
  //         },
  //         {
  //           label: 'Media object',
  //           link: '/ui-components/media-object',
  //         },
  //         {
  //           label: 'Modal',
  //           link: '/ui-components/modal',
  //         },
  //         {
  //           label: 'Navs',
  //           link: '/ui-components/navs',
  //         },
  //         {
  //           label: 'Navbar',
  //           link: '/ui-components/navbar',
  //         },
  //         {
  //           label: 'Pagination',
  //           link: '/ui-components/pagination',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: '',
  //           isTitle: true,
  //         },
  //         {
  //           label: 'Popovers',
  //           link: '/ui-components/popovers',
  //         },
  //         {
  //           label: 'Progress',
  //           link: '/ui-components/progress',
  //         },
  //         {
  //           label: 'Rating',
  //           link: '/ui-components/rating',
  //         },
  //         {
  //           label: 'Scrollbar',
  //           link: '/ui-components/scrollbar',
  //         },
  //         {
  //           label: 'Spinners',
  //           link: '/ui-components/spinners',
  //         },
  //         {
  //           label: 'Timepicker',
  //           link: '/ui-components/timepicker',
  //         },
  //         {
  //           label: 'Tooltips',
  //           link: '/ui-components/tooltips',
  //         },
  //         {
  //           label: 'Typeadhed',
  //           link: '/ui-components/typeahead',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Advanced UI',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Cropper',
  //           link: '/advanced-ui/cropper',
  //         },
  //         {
  //           label: 'Owl carousel',
  //           link: '/advanced-ui/owl-carousel',
  //         },
  //         {
  //           label: 'Sweet alert',
  //           link: '/advanced-ui/sweet-alert',
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Forms',
  //   icon: 'file-text',
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Basic elements',
  //           link: '/form-elements/basic-elements'
  //         },
  //         {
  //           label: 'Editors',
  //           link: '/form-elements/editors'
  //         },
  //         {
  //           label: 'Wizard',
  //           link: '/form-elements/wizard'
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Advanced elements',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Form validation',
  //           link: '/advanced-form-elements/form-validation'
  //         },
  //         {
  //           label: 'Input mask',
  //           link: '/advanced-form-elements/input-mask'
  //         },
  //         {
  //           label: 'Ng-select',
  //           link: '/advanced-form-elements/ng-select'
  //         },
  //         {
  //           label: 'Ngx-chips',
  //           link: '/advanced-form-elements/ngx-chips'
  //         },
  //         {
  //           label: 'Ngx-color-picker',
  //           link: '/advanced-form-elements/ngx-color-picker'
  //         },
  //         {
  //           label: 'Ngx-dropzone',
  //           link: '/advanced-form-elements/ngx-dropzone-wrapper'
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Data',
  //   icon: 'pie-chart',
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Charts & graphs',
  //           isTitle: true
  //         },
  //         {
  //           label: 'ApexCharts',
  //           link: '/charts-graphs/apexcharts',
  //         },
  //         {
  //           label: 'ChartJs',
  //           link: '/charts-graphs/chartjs',
  //         }
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Tables',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Basic tables',
  //           link: '/tables/basic-table',
  //         },
  //         {
  //           label: 'Data table',
  //           link: '/tables/data-table',
  //         },
  //         {
  //           label: 'Ngx-datatable',
  //           link: '/tables/ngx-datatable'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Icons',
  //   icon: 'smile',
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Feather icons',
  //           link: '/icons/feather-icons',
  //         },
  //         {
  //           label: 'Mdi icons',
  //           link: '/icons/mdi-icons',
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Special pages',
  //   icon: 'book',
  //   isMegaMenu: true,
  //   subMenus: [
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Special pages',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Blank page',
  //           link: '/general/blank-page',
  //         },
  //         {
  //           label: 'Faq',
  //           link: '/general/faq',
  //         },
  //         {
  //           label: 'Invoice',
  //           link: '/general/invoice',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: '',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Profile',
  //           link: '/general/profile',
  //         },
  //         {
  //           label: 'Pricing',
  //           link: '/general/pricing',
  //         },
  //         {
  //           label: 'Timeline',
  //           link: '/general/timeline',
  //         }
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Auth pages',
  //           isTitle: true
  //         },
  //         {
  //           label: 'Login',
  //           link: '/auth/login',
  //         },
  //         {
  //           label: 'Register',
  //           link: '/auth/register',
  //         },
  //       ]
  //     },
  //     {
  //       subMenuItems: [
  //         {
  //           label: 'Error pages',
  //           isTitle: true
  //         },
  //         {
  //           label: '404',
  //           link: '/error/404',
  //         },
  //         {
  //           label: '500',
  //           link: '/error/500',
  //         },
  //       ]
  //     }
  //   ]
  // }
];
