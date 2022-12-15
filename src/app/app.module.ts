import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormComponent } from './form-practise/form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PropertyDecoComponent } from './propertyDecorator/propertydeco.component';
import { ChildComponent } from './child/child.component';
import { BrandColorComponent } from './brand-color/brand-color.component';
import { DirectiveComponent } from './directives/directive.component';
import { PipeComponent } from './pipe-practise/pipe-practise.component';
import { RainBowDirective } from './helpers/rainbow.directive';
import { HighlightDirective } from './helpers/highlight.directive';
import { FilterPipe } from './helpers/filter.pipe';
import { CustomPipe } from './helpers/custom.pipe';
import { CustomImpurePipe } from './helpers/customimpure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormBuilderComponent,
    PropertyDecoComponent,
    ChildComponent,
    BrandColorComponent,
    DirectiveComponent,
    RainBowDirective,
    HighlightDirective,
    PipeComponent,
    FilterPipe,
    CustomPipe,
    CustomImpurePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
