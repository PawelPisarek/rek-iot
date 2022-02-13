import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

export const BOOKS_KEY = 'EXAMPLES.BOOKS';

@Injectable()
export class BooksEffects {
  // persistBooks = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(actionBooksUpsertOne, actionBooksDeleteOne),
  //       withLatestFrom(this.store.pipe(select(selectBooks))),
  //       tap(([actions, booksState]) =>
  //         this.localStorageService.setItem(BOOKS_KEY, booksState)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  constructor(private actions$: Actions) {}
}
