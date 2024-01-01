export const SAVINGS_MOVEMENT_FILTER_ALL = Symbol()

export const IN_MEMORY_PAGINATION_INIT_STATE = {
  data: null,
  offset: 0,
  pageSize: 15,
  pageCount: 0,
  currentData: null,
  activePage: 1,
  pagesNumberToShow: [],
  ellipsis: {
    maxNumbersFroMiddle: 2,
    middle: 3,
    showInitialEllipsis: false,
    showFinalEllipsis: false,
  }
}

export const PAGINATION_BOUNDARY_ACTIONS = {
  FIRST: 'first',
  PREVIOUS: 'previous',
  NEXT: 'next',
  LAST: 'last'
}

export const SAVINGS_DETAIL_BAR_CHART_INFO = {
  title: 'Información histórica',
  subtitle: 'Cómo te ha ido este mes en otros años',
  index: 'periodo',
  categories: ['Ingresos', 'Gastos', 'Diferencia'],
  colors: ['teal', 'blue', 'slate'],
  mapperFunc: (period) => {
    return {
      'periodo': `${period.periodDTO.monthByLocale}/${period.periodDTO.year}`,
      'Ingresos': period.income,
      'Gastos': Math.abs(period.expense),
      'Diferencia': Math.abs(period.totalReturn)
    }
  }
}