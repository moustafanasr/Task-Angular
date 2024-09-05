import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule], // Include CommonModule
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private router: Router) {} // Inject Router for navigation

  // Image Paths
  imageSrc: string = "assets/image/page1/Rectangle.svg";
  imageAdvertise: string = "assets/image/page1/advertise.svg";
  imageCorrect: string = "assets/image/page1/Correct.svg";
  imagePencil: string = "assets/image/page1/pencil.svg";
  imageCorrectActive: string = "assets/image/page1/correctActive.svg";
  imageCorrectDisabled: string = "assets/image/page1/correctdisabled.svg";
  imageAI: string = "assets/image/page1/AI.svg";
  imageExit: string = "assets/image/page1/Exit.svg";
  imageExitActive: string = "assets/image/page1/ExitActive.svg";

  // State Variables
  isDetailsVisible: boolean = false;  // Toggle visibility of the details section
  isHovering: boolean = false;        // Track hover state for Exit image
  inputColor: string = '#000000';     // Default color for the input element

  // Dynamic Image Source based on hover state
  get currentExitImage(): string {
    return this.isHovering ? this.imageExitActive : this.imageExit;
  }

  // Set opacity for details section based on its visibility
  get detailsOpacity(): string {
    return this.isDetailsVisible ? 'opacity-100' : 'opacity-0';
  }

  // Toggle visibility of details section
  onShowDetails(): void {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  // Trigger on hover, enabling hover state
  onHover(): void {
    this.isHovering = true;
  }

  // Trigger when hover ends, disabling hover state
  onLeave(): void {
    this.isHovering = false;
  }

  // Handle the exit button click, hide details, and change input color
  onClickExit(): void {
    this.isDetailsVisible = false;    // Hide the details section
    this.inputColor = '#FF0000';      // Change the input color to red
    console.log('Exit image clicked');
  }

// Navigate to HomeComponent (the home route)
navigateToHome(): void {
  // Check if isDetailsVisible is true (opacity is 100 and bg-buttonActive is applied)
  if (this.isDetailsVisible === false) {
    // If isDetailsVisible is false, set it to true but don't navigate yet
    // this.isDetailsVisible = true;
    console.log('Details are now visible');
    return;
  }

  // If isDetailsVisible is already true, proceed with navigation
  this.router.navigate(['/home']);  // Navigate to HomeComponent
}


}
