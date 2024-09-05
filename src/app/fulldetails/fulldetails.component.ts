import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-fulldetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.css']
})
export class FulldetailsComponent {
  constructor(private router: Router, private location: Location) { }

  // Image Paths
  imageCalendar: string = "assets/image/page6/calendar.svg";
  imageEye: string = "assets/image/page6/eye.svg";
  imagePrimary: string = "assets/image/page2/Primary.svg";
  imageMesasage: string = "assets/image/page5/message.svg";
  imageExit: string = "assets/image/page1/Exit.svg";
  imageExitActive: string = "assets/image/page1/ExitActive.svg";

  // State variables
  textareaValue: string = '';  // Binding textarea field
  selectedRadio: string = ''; // Binding selected radio button
  isHovering: boolean = false;
  buttonColor: string = '';  // State for button color

  // Method to check if the form is filled
  isFormFilled(): boolean {
    return this.textareaValue !== '' && this.selectedRadio !== '';
  }

  // Handle input click to change color and then navigate
  onInputClick(): void {
    if (this.isFormFilled()) {
      this.buttonColor = '#3E97FF'; // Change button color to #3E97FF
      setTimeout(() => {
        this.navigateToFullDetails(); // Navigate after a short delay
      }, 200); // Adjust delay as needed
    }
  }

  // Navigate to the full details page
  navigateToFullDetails(): void {
    this.router.navigate(['/send-message']);  // Navigate to target page
  }

  // Update selected radio button value
  onRadioChange(value: string): void {
    this.selectedRadio = value;
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
    // Reset or cancel actions
    this.textareaValue = '';  // Clear textarea
    this.selectedRadio = '';  // Deselect radio buttons
    this.buttonColor = '';    // Reset button color

    // Optionally, you could perform additional cleanup here

    // Example of optional additional cleanup
    // this.someService.resetData(); // Reset service data if applicable

    console.log('Exit image clicked, state reset.');
  }

  // Navigate back to the previous page when the arrow is clicked
  onClickPreviousPage(): void {
    this.location.back();
  }
}
