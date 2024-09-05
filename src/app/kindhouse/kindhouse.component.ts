import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router
import { Location } from '@angular/common'; // Import Location for back navigation

@Component({
  selector: 'app-kindhouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kindhouse.component.html',
  styleUrl: './kindhouse.component.css'
})
export class KindhouseComponent {
  constructor(private router: Router, private location: Location) { } // Inject Location service

  // Image Paths
  imageStar: string = "assets/image/page2/Star.svg";
  imageFella: string = "assets/image/page3/Fella.svg";
  imageCorrectActive: string = "assets/image/page2/correctActive.svg";
  imageCorrectDisabled: string = "assets/image/page2/correctdisabled.svg";
  imageFloor: string = "assets/image/page3/Floor.svg";
  imageFloor1: string = "assets/image/page3/Floor1.svg";
  imagePrimary: string = "assets/image/page2/Primary.svg";
  imageExit: string = "assets/image/page1/Exit.svg";
  imageExitActive: string = "assets/image/page1/ExitActive.svg";

  // State variables
  selectedLocation: string = '';       // To track which location is selected
  isDetailsVisible: boolean = false;   // To control background color of the button
  isHovering: boolean = false;         // Track hover state for Exit image
  inputColor: string = '#000000';      // Default color for the input element

  // Function to select location and set details visible
  selectLocation(location: string): void {
    this.selectedLocation = location;
    this.isDetailsVisible = true; // Enable button active state after location is selected
  }

  // Navigate only if a location is selected
  navigateToWelcome(): void {
    // Check if a location is selected (isDetailsVisible)
    if (this.isDetailsVisible && this.selectedLocation) {
      this.router.navigate(['/about-house']);  // Navigate to HomeComponent or target page
    } else {
      console.log('No location selected, stay on the same page.');
      // Optionally, you can show an error message or feedback to the user
    }
  }
    // Dynamic Image Source based on hover state
    get currentExitImage(): string {
      return this.isHovering ? this.imageExitActive : this.imageExit;
    }

    // Trigger on hover, enabling hover state
    onHover(): void {
      this.isHovering = true;
    }

    // Trigger when hover ends, disabling hover state
    onLeave(): void {
      this.isHovering = false;
    }

    // Handle the exit button click, reset all component state
    onClickExit(): void {
      this.isDetailsVisible = false;    // Hide the details section
      this.selectedLocation = '';       // Clear the selected location
      this.inputColor = '#FF0000';      // Change the input color to red
      console.log('Exit image clicked, component state reset.');
    }
      // Navigate to the previous page when the arrow is clicked
      onClickPreviousPage(): void {
        this.location.back(); // Go back to the previous page
      }
}
