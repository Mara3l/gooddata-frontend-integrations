import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import invariant from 'invariant';
import { IInsightViewProps } from '@gooddata/sdk-ui-all';
import tigerFactory, {
  TigerTokenAuthProvider,
} from '@gooddata/sdk-backend-tiger';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { environment } from '../../environments/environment';

const backend = tigerFactory()
  .onHostname(environment.hostname)
  .withAuthentication(new TigerTokenAuthProvider(environment.apiKey));

@Component({
  selector: 'gooddata-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID}' not found!`);
    return node;
  }

  protected getProps(): IInsightViewProps {
    return {
      workspace: environment.workspaceID,
      insight: environment.insightID,
      backend,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(
        React.createElement(InsightView, this.getProps()),
        this.getRootDomNode()
      );
    }
  }

  ngOnInit() {
    this.rootDomID = 'gooddata-chart';
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
