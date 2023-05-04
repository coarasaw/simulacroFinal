import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { Github } from 'src/app/clases/github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubComponent implements OnInit {
  @Input() user:Github;

  constructor() { }

  ngOnInit(): void {
  }

}