
export default function deletePage() {
    return { template: `
    <div class="delete-container">
        <p class="delete-message"></p>
        <div class="delete-buttons">
            <button id="deleteBtn" class="option-button border-rounding close blue" value="Delete">YES</button>
            <button id="cancelBtn" class="option-button border-rounding close red" value="Cancel">NO</button>
        </div>
    </div>`,

        listeners: [
            
        ]
    };
}