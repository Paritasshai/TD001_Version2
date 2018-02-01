import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {CourselistComponent} from './courselist/courselist.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {UserService} from './services/User.service';
import {AlertService} from './alertContent/AlertService';
import {AlertComponent} from './alertContent/AlertComponent';
import {AuthenticationService} from './services/Authentication.service';
import {AuthGuard} from './services/Auth.guard';
import {UserProfileComponent} from './userProfile/user-profile.component';
import {ManagementPageComponent} from './management-page/management-page.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {forgotPassword} from './services/ForgotPassword';
import {TopUpBankPageComponent} from './top-up-bank-page/top-up-bank-page.component';
import {TopUpOnlinePageComponent} from './top-up-online-page/top-up-online-page.component';
import {OrderService} from './services/OrderService';
import {NonTopUpComponent} from './non-top-up/non-top-up.component';
import {BankStatementService} from './services/BankStatementService';
import {PaymentHistoryListComponent} from './payment-history-list/payment-history-list.component';
import {MyDatePickerModule} from 'mydatepicker';
import {VideoListPageComponent} from './course-video-list-page/video-list-page.component';
import {FileUploadModule} from 'ng2-file-upload';
import {PaymentTransService} from './services/PaymentTransService';
import {CourseListsComponent} from './course-lists/course-lists.component';
import {CourseService} from './services/CourseService';
import {UserManagementComponent} from './user-management/user-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {EditCourstIdComponent} from './edit-courst-id/edit-courst-id.component';
import {ImageUploadModule} from 'angular2-image-upload';
import {AddVideoItemComponent} from './add-video-item/add-video-item.component';
import {PurchaseCourseService} from './services/PurchaseCourseService';
// import {Ng2OrderModule} from 'ng2-order-pipe';
// import {FacebookModule} from 'ngx-facebook';
import {HttpClientModule} from '@angular/common/http';
import {SortingPipe} from './pipes/sorting.pipe';
import {CourseHistoryComponent} from './course-history/course-history.component';
import {SearchPipe} from './pipes/search.pipe';
import {MapKeyPipe} from './pipes/map-key.pipe';
import {SortObjectPipe} from './pipes/sort-object.pipe';
import {EditUserComponent} from './edit-user/edit-user.component';
import {SafetyPipe} from './pipes/safety.pipe';
// import {VgCoreModule} from 'videogular2/core';
// import {VgControlsModule} from 'videogular2/controls';
// import {VgOverlayPlayModule} from 'videogular2/overlay-play';
// import {VgBufferingModule} from 'videogular2/buffering';
import {TrustAsResourceUrlPipe} from './pipes/trust-as-resource-url.pipe';
import {RandomPipe} from './pipes/random.pipe';
import {CourseCustomerComponent} from './course-lists/course-customer/course-customer.component';
import {CourseMemberComponent} from './course-lists/course-member/course-member.component';
import {CourseInsComponent} from './course-lists/course-ins/course-ins.component';
import {CourseAdminComponent} from './course-lists/course-admin/course-admin.component';
import {CourseFavorComponent} from './userProfile/course-favor/course-favor.component';
import {RobomindComponent} from './robomind/robomind.component';
import {CreateProfileComponent} from './robomind/create-profile/create-profile.component';
import {ReviewProfileComponent} from './robomind/review-profile/review-profile.component';
import {AddComentComponent} from './robomind/add-coment/add-coment.component';
import {StudentService} from './services/StudentService';
import {EditProfileComponent} from './robomind/create-profile/edit-profile/edit-profile.component';
import {EditCommentComponent} from './robomind/add-coment/edit-comment/edit-comment.component';
import {CreateRoboticComponent} from './robomind/create-robotic/create-robotic.component';
import {InstructorProfileComponent} from './userProfile/instructor-profile/instructor-profile.component';
import {SpinnerModule} from 'spinner-angular';

import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {CustomModalContextComponent} from './alertContent/custom-modal-context/custom-modal-context.component';
import {CourseComponent} from './alertContent/course/course.component';
import {CourseDecisionComponent} from './alertContent/course-decision/course-decision.component';
import { StoreComponent } from './alertContent/store/store.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    CourselistComponent,
    SignuppageComponent,
    AlertComponent,
    UserProfileComponent,
    ManagementPageComponent,
    ForgotPasswordPageComponent,
    TopUpBankPageComponent,
    TopUpOnlinePageComponent,
    NonTopUpComponent,
    PaymentHistoryListComponent,
    VideoListPageComponent,
    CourseListsComponent,
    UserManagementComponent,
    OrderManagementComponent,
    EditCourseComponent,
    EditCourstIdComponent,
    AddVideoItemComponent,
    SortingPipe,
    CourseHistoryComponent,
    SearchPipe,
    MapKeyPipe,
    SortObjectPipe,
    EditUserComponent,
    SafetyPipe,
    TrustAsResourceUrlPipe,
    RandomPipe,
    CourseCustomerComponent,
    CourseMemberComponent,
    CourseInsComponent,
    CourseAdminComponent,
    CourseFavorComponent,
    RobomindComponent,
    CreateProfileComponent,
    ReviewProfileComponent,
    AddComentComponent,
    EditProfileComponent,
    EditCommentComponent,
    CreateRoboticComponent,
    InstructorProfileComponent,
    CustomModalContextComponent,
    CourseComponent,
    CourseDecisionComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MyDatePickerModule,
    FileUploadModule,
    ImageUploadModule.forRoot(),
    // Ng2OrderModule,
    // FacebookModule.forRoot(),
    HttpClientModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    SpinnerModule.forRoot({}),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    YoutubePlayerModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,
    forgotPassword,
    OrderService,
    BankStatementService,
    PaymentTransService,
    CourseService,
    PurchaseCourseService,
    StudentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    CustomModalContextComponent,
    CourseComponent
  ],
})
export class AppModule {}

