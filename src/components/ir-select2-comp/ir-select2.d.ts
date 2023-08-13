
interface select2Options {
    width?: string;
    minimumInputLength?: number;
    maximumInputLength?: number;
    minimumResultsForSearch?: number;
    maximumSelectionSize?: number | (() => number);
    placeholder?: string;
    placeholderOption?: (selectElement: HTMLSelectElement) => HTMLOptionElement | string;
    separator?: string;
    allowClear?: boolean;
    multiple?: boolean;
    closeOnSelect?: boolean;
    openOnEnter?: boolean;
    id?: (choice: any) => string;
    matcher?: (term: string, text: string, option: JQuery<HTMLElement>) => boolean;
    sortResults?: (results: any[], container: JQuery<HTMLElement>, query: any) => any[];
    formatSelection?: (object: any, container: JQuery<HTMLElement>) => string;
    formatResult?: (object: any, container: JQuery<HTMLElement>, query: any) => string;
    formatResultCssClass?: (object: any) => string;
    formatNoMatches?: (term: string) => string;
    formatSearching?: () => string;
    formatAjaxError?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => string;
    formatInputTooShort?: (term: string, minLength: number) => string;
    formatInputTooLong?: (term: string, maxLength: number) => string;
    formatSelectionTooBig?: (maxSize: string) => string;
    formatLoadMore?: (pageNumber: string) => string;
    createSearchChoice?: (term: string) => { id: string, text: string } | null;
    createSearchChoicePosition?: string | ((list: any[], item: any) => void);
    initSelection?: (element: JQuery<HTMLElement>, callback: (data: any) => void) => void;
    tokenizer?: (
      input: string,
      selection: any[],
      selectCallback: (choice: { id: string, text: string }) => void,
      opts: Select2Parameters
    ) => string | null;
    tokenSeparators?: string[];
    query?: (options: {
      element: JQuery<HTMLElement>,
      term: string,
      page: number,
      context: any,
      callback: (result: {
        results: any[],
        more: boolean,
        context: any,
      }) => void
    }) => void;
    ajax?: {
      transport?: (options: any) => any;
      url?: string | (() => string);
      dataType?: string;
      quietMillis?: number;
      cache?: boolean;
      jsonpCallback?: string;
      data?: (term: string, page: number, context: any) => any;
      results?: (data: any, page: number, query: any) => { results: any[], more: boolean, context: any };
      params?: any | (() => any);
    };
    tags?: (string | { id: string, text: string })[] | (() => (string | { id: string, text: string })[]);
    containerCss?: Record<string, string> | ((container: JQuery<HTMLElement>) => Record<string, string>);
    containerCssClass?: string | ((clazz: string) => string | null);
    dropdownCss?: Record<string, string> | ((container: JQuery<HTMLElement>) => Record<string, string>);
    dropdownCssClass?: string | ((clazz: string) => string | null);
    dropdownAutoWidth?: boolean;
    adaptContainerCssClass?: (clazz: string) => string | null;
    adaptDropdownCssClass?: (clazz: string) => string | null;
    escapeMarkup?: (markup: string) => string;
    selectOnBlur?: boolean;
    loadMorePadding?: number;
    nextSearchTerm?: (data: any, currentSearchTerm: string) => string;
  }
  
  
  interface JQuery<TElement = HTMLElement> {
    select2(options?: Select2Options): JQuery<TElement>;
  }
  
  
  
  
  
  
  // copy paste these cdm links and scripts to get to the library
  
  //   <!-- Select2 CSS -->
  // <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
  
  // <!-- jQuery -->
  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  
  // <!-- Select2 JS -->
  // <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>