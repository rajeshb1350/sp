import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Webpage components 
import { IndexComponent } from './webpages/index/index.component';
import { AboutUsComponent } from './webpages/about-us/about-us.component';
import { ContactUsComponent } from './webpages/contact-us/contact-us.component';
import { BlogsComponent } from './webpages/blogs/blogs.component';
import { ApplyComponent } from './webpages/apply/apply.component';
import { StudyProgramsComponent } from './webpages/study-programs/study-programs.component';
import { EmailverificationComponent } from './webpages/emailverification/emailverification.component';


// Global Components
import { HeaderComponent } from './components/header/header1/header.component';
import { MainHeaderComponent } from './components/header/header1/main-header/main-header.component';
import { NavMenuComponent } from './components/header/header1/nav-menu/nav-menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { FooterComponent } from './components/footer/footer1/footer.component';

// Directives
import { dropdownDirective } from './directive/dropdown.directive';

// Routes Imports
import { Routes, RouterModule } from '@angular/router';

// Ng2  Carousel Component
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

// Form Components
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFromComponent } from './components/forms/register-from/register-from.component';
import { ContactFromComponent } from './components/forms/contact-from/contact-from.component';
import { ForgotPassFormComponent } from './components/forms/forgot-pass-form/forgot-pass-form.component';

// Custom Components
import { CounterComponent } from './components/blocks/counter/counter1/counter.component';
import { Cards1Component } from './components/blocks/cardview/cards1/cards1.component';
import { StudyproComponent } from './components/blocks/studypro/studypro1/studypro.component';
import { SliderBannerComponent } from './components/blocks/slider/slider-banner/slider-banner.component';
import { Heading1Component } from './components/heading/heading1/heading1.component';
import { JoinUsComponent } from './components/blocks/join-us/join-us.component';
import { Slider2Component } from './components/blocks/slider/slider2/slider2.component';
import { Carousel1Component } from './components/carousel/carousel1/carousel1.component';
import { UniversityComponent } from './components/blocks/university/university1/university.component';
import { UpcomingEventsComponent } from './components/blocks/upcoming-events/upcoming-events1/upcoming-events.component';
import { ShopComponent } from './components/blocks/shop/shop1/shop.component';
import { GotopComponent } from './components/blocks/gotop/gototop1/gotop.component';
import { TestimonialComponent } from 'src/app/components/blocks/testimonial/testimonial1/testimonial.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu/sidemenu.component';
import { StudyProgramDetailsComponent } from './webpages/study-program-details/study-program-details.component';
import { StudyProgramDescComponent } from './webpages/study-program-details/study-program-desc/study-program-desc.component';
import { StudyProgramInfoComponent } from './webpages/study-program-details/study-program-info/study-program-info.component';
import { StudyProgramCarouselComponent } from './webpages/study-program-details/study-program-carousel/study-program-carousel.component';
import { Header2Component } from './components/header/header2/header2.component';
import { SubscriptionComponent } from './components/forms/subscription-form/subscription-from/subscription.component';
import { SubscribeComponent } from './components/blocks/subscribe/subscribe.component';
import { Slider3Component } from './components/blocks/slider/slider3/slider3.component';
import { Tabs1Component } from './components/blocks/tabs/tabs1/tabs1.component';
import { Header3Component } from './components/header/header3/header3.component';
import { HttpModule } from '@angular/http';
import { HeaderService } from './services/http/header.service';
import { JobreadyComponent } from './components/blocks/jobready/jobready.component';



const appRoutes: Routes = [
  { path: "", component: IndexComponent },
  { path: "study-programs", component: StudyProgramsComponent },
  { path: "apply", component: ApplyComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "study-programs/card1", component: StudyProgramDetailsComponent },
  { path: "suscribe", component: SubscriptionComponent },
  { path: "verifydash", component: EmailverificationComponent }
 

];

@NgModule({
  declarations: [
    AppComponent,
    
    // Webpage components 
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogsComponent,
    ApplyComponent,
    StudyProgramsComponent,
    SidemenuComponent,
    EmailverificationComponent,
    // Global Components
    HeaderComponent,
    MainHeaderComponent,
    NavMenuComponent,
    FooterComponent,
    NavigationComponent,
    
    // Directives
    dropdownDirective,
    
    // Form Components
    LoginFormComponent,
    RegisterFromComponent,
    ContactFromComponent,
    ForgotPassFormComponent,
    
    // Custom Components
    StudyproComponent,
    SliderBannerComponent,
    Heading1Component,
    CounterComponent,
    Cards1Component,
    JoinUsComponent,
    Slider2Component,
    Carousel1Component,
    UniversityComponent,
    UpcomingEventsComponent,
    ShopComponent,
    GotopComponent,
    TestimonialComponent,
    StudyProgramDetailsComponent,
    StudyProgramDescComponent,
    StudyProgramInfoComponent,
    StudyProgramCarouselComponent,
    Header2Component,
    SubscriptionComponent,
    SubscribeComponent,
    Slider3Component,
    Tabs1Component,
    Header3Component,
    JobreadyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Ng2CarouselamosModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule { }
