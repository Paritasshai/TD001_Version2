import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {SignuppageComponent} from './signuppage/signuppage.component';
import {ManagementPageComponent} from './management-page/management-page.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {TopUpBankPageComponent} from './top-up-bank-page/top-up-bank-page.component';
import {TopUpOnlinePageComponent} from './top-up-online-page/top-up-online-page.component';
import {UserProfileComponent} from './userProfile/user-profile.component';
import {NonTopUpComponent} from './non-top-up/non-top-up.component';
// import {PaymentHistoryListComponent} from 'app/payment-history-list/payment-history-list.component';
import {CourseListsComponent} from './course-lists/course-lists.component';
import {EditCourstIdComponent} from './edit-courst-id/edit-courst-id.component';
import {VideoListPageComponent} from './course-video-list-page/video-list-page.component';
import {CourselistComponent} from './courselist/courselist.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {AddVideoItemComponent} from './add-video-item/add-video-item.component';
import {CourseHistoryComponent} from './course-history/course-history.component';
import {RobomindComponent} from './robomind/robomind.component';
import {CreateProfileComponent} from './robomind/create-profile/create-profile.component';
import {ReviewProfileComponent} from './robomind/review-profile/review-profile.component';
import {AddComentComponent} from './robomind/add-coment/add-coment.component';
import {CourseFavorComponent} from './userProfile/course-favor/course-favor.component';
import {EditProfileComponent} from './robomind/create-profile/edit-profile/edit-profile.component';
import {EditCommentComponent} from './robomind/add-coment/edit-comment/edit-comment.component';
import {CreateRoboticComponent} from './robomind/create-robotic/create-robotic.component';
import {InstructorProfileComponent} from './userProfile/instructor-profile/instructor-profile.component';
import {StoreComponent} from './alertContent/store/store.component';
import {DecistionService} from './alertContent/course-decision/course-decision.component' ;
import { HeaderSearchComponent } from './header/header-search/header-search.component';

const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'signUp', component: SignuppageComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'management', component: ManagementPageComponent},
  {path: 'forgotPassword', component: ForgotPasswordPageComponent},
  {path: 'topUpBank/:id', component: TopUpBankPageComponent},
  {path: 'topUpOnline', component: TopUpOnlinePageComponent},
  {path: 'nonTopUp', component: NonTopUpComponent},
  // {path: 'PaymentLists', component: PaymentHistoryListComponent},
  {path: 'CourseLists/:id', component: CourseListsComponent},
  {path: 'EditCourse/:id', component: EditCourstIdComponent},
  {path: 'createCourse', component: VideoListPageComponent},
  {path: 'courseCreateList', component: CourselistComponent},
  {path: 'EditCourse', component: EditCourseComponent},
  {path: 'addItem/:id', component: AddVideoItemComponent},
  {path: 'CourseHistory', component: CourseHistoryComponent},
  {path: 'RobomindHome', component: RobomindComponent},
  {path: 'RobomindCreate', component: CreateProfileComponent},
  {path: 'RobomindReview/:id', component: ReviewProfileComponent},
  {path: 'RobomindContent/:id', component: AddComentComponent},
  {path: 'Favor', component: CourseFavorComponent},
  {path: 'editProfile/:id', component: EditProfileComponent},
  {path: 'editComment/:id', component: EditCommentComponent},
  {path: 'createRobotic', component: CreateRoboticComponent},
  {path: 'insProfile/:id', component: InstructorProfileComponent},
  {path: 'store', component: StoreComponent},
  {path: 'HeaderSearch/:id', component: HeaderSearchComponent},
  {path: 'courseVideo/:id', component: DecistionService},


  // otherwise redirect to home
  {path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
