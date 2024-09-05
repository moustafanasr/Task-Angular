import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-abouthome',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './abouthome.component.html',
  styleUrls: ['./abouthome.component.css']
})
export class AbouthomeComponent {
  constructor(private router: Router, private location: Location) { }

  // Image Paths
  imageStar: string = "assets/image/page2/Star.svg";
  imageFrame1: string = "assets/image/page5/Frame1.svg";
  imageFrame2: string = "assets/image/page5/Frame2.svg";
  imageFrame3: string = "assets/image/page5/Frame3.svg";
  imageFrame4: string = "assets/image/page5/Frame4.svg";
  imageFrame5: string = "assets/image/page5/Frame5.svg";
  imageFrame6: string = "assets/image/page5/Frame6.svg";
  imageFrame7: string = "assets/image/page5/Frame7.svg";
  imageFrame8: string = "assets/image/page5/Frame8.svg";
  imageFrame9: string = "assets/image/page5/Frame9.svg";
  imageFrame10: string = "assets/image/page5/Frame10.svg";
  imageFrame11: string = "assets/image/page5/Frame11.svg";
  imageFrame12: string = "assets/image/page5/Frame12.svg";
  imageFrame13: string = "assets/image/page5/Frame13.svg";
  imagePrimary: string = "assets/image/page2/Primary.svg";
  imageMesasage: string = "assets/image/page5/message.svg";
  imageExit: string = "assets/image/page1/Exit.svg";
  imageExitActive: string = "assets/image/page1/ExitActive.svg";

  // State variables
  inputValue: string = '';  // Binding input field
  textareaValue: string = '';  // Binding textarea field
  isHovering: boolean = false;
  inputColor: string = '#000000';
  buttonColor: string = '';  // State for button color
  timeoutId: any; // Store the timeout ID

  // Method to check if the form is filled
  isFormFilled(): boolean {
    return this.inputValue !== '' && this.textareaValue !== '';
  }

  // Handle input click to change color and then navigate
  onInputClick(): void {
    if (this.isFormFilled()) {
      this.inputColor = '#B0BBD5'; // Change the color to red
      this.buttonColor = '#3E97FF'; // Change button color to red
      this.timeoutId = setTimeout(() => {
        this.navigateToFullDetails(); // Navigate after a short delay
      }, 200); // Adjust delay as needed
    }
  }

  // Navigate to the full details page
  navigateToFullDetails(): void {
    this.router.navigate(['/full-details']);  // Navigate to HomeComponent or target page
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

  // Handle the exit button click, reset input color and clear timeout
  onClickExit(): void {
    this.inputColor = '#FF0000'; // Reset input color to red
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Clear the timeout if it exists
    }
    this.inputValue = ''; // Clear input value
    this.textareaValue = ''; // Clear textarea value
    this.buttonColor = ''; // Reset button color
    console.log('Exit image clicked. All actions and states have been reset.');
  }

  // Navigate back to the previous page when the arrow is clicked
  onClickPreviousPage(): void {
    this.location.back();
  }
}
