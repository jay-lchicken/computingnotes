# BIOS (Basic Input/Output System)

The BIOS (Basic Input/Output System) is firmware embedded on a computer's motherboard that initializes hardware components and loads the operating system during startup.

## Overview

BIOS is the first software to run when a computer starts. It provides low-level control over hardware and serves as an intermediary between the operating system and hardware components.

## Key Functions

### 1. POST (Power-On Self Test)
- Tests critical hardware components at startup
- Checks CPU, RAM, storage, and peripherals
- Reports errors via beep codes or display messages
- Halts boot if critical failures detected

### 2. Hardware Initialization
- Detects and configures hardware components
- Sets up memory timings and frequencies
- Initializes storage controllers
- Configures peripheral devices

### 3. Boot Process
- Locates bootable devices (HDD, SSD, USB, network)
- Loads bootloader from boot device
- Transfers control to operating system
- Maintains boot order priority

### 4. Runtime Services
- Provides hardware abstraction for OS
- Handles low-level I/O operations
- Manages power states and interrupts
- Offers system configuration interface

## BIOS vs UEFI

Modern systems use UEFI (Unified Extensible Firmware Interface):

| Feature | Traditional BIOS | UEFI |
|---------|------------------|------|
| Interface | Text-based | Graphical |
| Drive support | 2.2 TB max | 9.4 ZB max |
| Boot speed | Slower | Faster |
| Security | Basic | Secure Boot |
| Partition style | MBR | GPT |
| Network support | Limited | Full |

## BIOS Configuration

### Accessing BIOS
- Press specific key during startup:
  - **Del**: Most common (ASUS, MSI, Gigabyte)
  - **F2**: Common on laptops (Dell, Lenovo)
  - **F10**: HP systems
  - **F12**: Boot menu (many manufacturers)

### Common Settings

#### Boot Configuration
- Boot order/priority
- Boot mode (Legacy/UEFI)
- Secure Boot enable/disable
- Fast Boot options

#### CPU Settings
- Multiplier and base clock
- Voltage settings
- Virtualization support (VT-x/AMD-V)
- Core enablement

#### Memory Settings
- XMP/DOCP profiles (overclocking)
- Memory frequency
- Timing adjustments
- Voltage settings

#### Storage Settings
- SATA mode (AHCI/RAID/IDE)
- NVMe configuration
- Boot device selection

#### Security
- Administrator/user passwords
- Secure Boot keys
- TPM (Trusted Platform Module)
- Drive encryption support

## BIOS Chip

- Stores firmware on flash memory chip
- Usually 8-32 MB capacity
- Can be updated (flashed)
- CMOS battery maintains settings
- Located on motherboard

## CMOS (Complementary Metal-Oxide-Semiconductor)

- Separate memory chip for BIOS settings
- Powered by coin-cell battery (CR2032)
- Stores date, time, and configuration
- Cleared by removing battery or using jumper
- Lasts 3-10 years typically

## BIOS Updates

### Why Update
- Hardware compatibility improvements
- Security patches
- Bug fixes
- Performance enhancements
- New CPU support

### Risks
- Power loss can brick motherboard
- Wrong version causes failures
- May void warranty

### Best Practices
1. Verify correct motherboard model
2. Use manufacturer utility or USB
3. Ensure stable power
4. Don't interrupt process
5. Reset to defaults after update

## Troubleshooting

### Common Issues
- **Won't POST**: Check RAM, CPU, power
- **CMOS errors**: Replace battery
- **Boot loops**: Reset BIOS settings
- **No display**: Check GPU/seated components
- **Forgot password**: Clear CMOS

### Reset Methods
1. BIOS menu: Load Optimized Defaults
2. Clear CMOS jumper on motherboard
3. Remove CMOS battery for 5-10 minutes
4. Some boards have reset button

## Security Features

- **Secure Boot**: Validates OS bootloader
- **TPM**: Hardware security module
- **BIOS password**: Prevents unauthorized access
- **Drive encryption**: BitLocker/TPM integration
- **ME/PSP**: Intel ME / AMD Platform Security

## Legacy and Modern Use

While UEFI has replaced BIOS in most systems, the term "BIOS" is still commonly used to refer to firmware settings. UEFI provides:
- Faster boot times
- Better hardware support
- Enhanced security
- Modern user interface
- Network capabilities
