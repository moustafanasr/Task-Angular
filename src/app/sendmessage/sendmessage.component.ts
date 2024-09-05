import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-sendmessage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css'] // Ensure this is correct
})
export class SendmessageComponent implements OnInit {
  constructor(private router: Router, private location: Location) { }

  // Image Paths
  imageSend: string = "assets/image/page7/send.svg";
  imageCorrectSend: string = "assets/image/page7/CorrectSend.svg";
  imageExit: string = "assets/image/page1/Exit.svg";
  imageExitActive: string = "assets/image/page1/ExitActive.svg";

  // State variables
  textareaValue: string = '';  // Binding textarea field
  selectedRadio: string = ''; // Binding selected radio button
  isHovering: boolean = false;
  buttonColor: string = '';  // State for button color
  progressValue: number = 0; // Initialize progressValue
  isProgressComplete: boolean = false; // Flag to track progress completion
  mainText: string = 'جاري إرسال رسالتك الأسكانية'; // Initial text
  subText: string = 'الرجاء الأنتظار بعض الدقائق فقط'; // Initial subtext

  // Simulate progress value change (for demonstration purposes)
  ngOnInit(): void {
    this.simulateProgress();
  }

  simulateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      this.progressValue = progress;
      if (progress >= 100) {
        clearInterval(interval);
        this.imageSend = this.imageCorrectSend; // Change image to correct send
        this.mainText = 'تم إرسال رسالتك بنجاح'; // Update main text
        this.subText = 'الرجاء الأنتظار بعض الدقائق فقط'; // Update subtext
        this.isProgressComplete = true; // Mark progress as complete
      }
    }, 50); // Adjust interval as needed
  }

  // Navigate to home page
  navigateToHome(): void {
    this.router.navigate(['/']); // Navigate to HomeComponent or target page
  }

  // Dynamic Image Source based on hover state
  get currentExitImage(): string {
    return this.isHovering ? this.imageExitActive : this.imageExit;
  }

  // Trigger hover state for exit button
  onHover(): void {
    this.isHovering = true;
  }

  // Reset hover state when mouse leaves exit button
  onLeave(): void {
    this.isHovering = false;
  }

  // Handle the exit button click
  onClickExit(): void {
    console.log('Exit image clicked.');
    this.router.navigate(['/']);  // Navigate to HomeComponent or target page
  }

  // Navigate back to the previous page when the arrow is clicked
  onClickPreviousPage(): void {
    this.location.back();
  }
}
