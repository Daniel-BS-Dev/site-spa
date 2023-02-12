import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Subject, takeUntil } from 'rxjs';

export interface Searching {
  filter: string,
  loading: boolean
}

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit, OnDestroy {

  @Output() filterSearching = new EventEmitter<Searching>();
  loading: boolean = true;

  filter = new FormControl('');

  unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.getChangesFieldSearch();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private getChangesFieldSearch = () => {
    this.loading = true;

    this.filter.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.unsubscribe$)
    ).subscribe((filter) =>
      this.filterSearching.emit({
        filter: filter ? filter : '',
        loading: false
      })
    );
  }
}
