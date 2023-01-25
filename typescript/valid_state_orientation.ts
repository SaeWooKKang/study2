// invalid state
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

// valid state(use tagged union)
interface RequestPending {
  state: 'pending';
}
interface RequestError {
  state: 'error';
  error: string;
}
interface RequestSuccess {
  state: 'ok';
  pageText: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  currentPage: string;
  requests: {[page: string]: RequestState}
}

// reference 
// effective typescript (item 28)

// related
// https://mariusschulz.com/blog/tagged-union-types-in-typescript