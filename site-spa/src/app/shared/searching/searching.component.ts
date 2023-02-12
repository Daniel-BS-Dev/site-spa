import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit, OnDestroy {

  @Output() filterSearching = new EventEmitter<string>();

  filter = new FormControl('');

  unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.getChangesFieldSearch();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private getChangesFieldSearch = () =>
    this.filter.valueChanges.pipe(
      map(value => value?.toLowerCase()),
      map(value => value?.trim()),
      takeUntil(this.unsubscribe$)
    ).subscribe((filter) =>
      this.filterSearching.emit(filter ? filter : '')
    );
}
