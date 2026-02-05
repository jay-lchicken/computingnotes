# ROM (Read-Only Memory)

Read-Only Memory (ROM) is a type of non-volatile computer memory that retains stored data permanently, even when power is removed. Traditional ROM cannot be easily modified after manufacturing.

## Overview

ROM contains firmware and software that should not be altered during normal operation. It provides essential instructions for hardware initialization and basic system functions.

## Key Characteristics

- **Non-volatile**: Retains data without power
- **Read-only**: Cannot be easily modified
- **Permanent storage**: Data persists indefinitely
- **Fast access**: Quick read operations
- **Reliable**: Immune to accidental deletion

## Types of ROM

### Mask ROM (MROM)
- Data written during chip manufacturing
- Cannot be modified after production
- Used for mass-produced, unchanging code
- Cheapest per unit for high volumes

### PROM (Programmable ROM)
- Can be programmed once by user
- Uses special programming equipment
- Cannot be erased or reprogrammed
- Obsolete technology

### EPROM (Erasable PROM)
- Can be erased and reprogrammed
- Erased by ultraviolet (UV) light exposure
- Has transparent quartz window
- Limited erase cycles (~1000)

### EEPROM (Electrically Erasable PROM)
- Erased and programmed electrically
- No UV light needed
- Byte-level erasure possible
- Slower than other memory types
- Used for BIOS/UEFI firmware

### Flash Memory
- Type of EEPROM with block-level operations
- Faster than traditional EEPROM
- NAND Flash: Dense, used in SSDs, USB drives
- NOR Flash: Faster reads, used for firmware
- Limited write endurance (10,000-100,000 cycles)

## ROM vs RAM

| Feature | ROM | RAM |
|---------|-----|-----|
| Volatility | Non-volatile | Volatile |
| Read/Write | Read-only (mostly) | Read and write |
| Speed | Slower | Faster |
| Purpose | Permanent storage | Temporary working memory |
| Cost per GB | Lower | Higher |
| Modification | Difficult/limited | Easy and frequent |

## Common Uses

### Firmware Storage
- **BIOS/UEFI**: Motherboard firmware
- **Embedded systems**: Routers, printers, IoT devices
- **Game cartridges**: Console game storage
- **Microcontrollers**: Program instructions

### System Boot
- Contains bootloader instructions
- Hardware initialization routines
- Basic diagnostic tests
- Recovery mode code

### Character Sets
- Font data for displays
- Symbol libraries
- Terminal character maps

### Lookup Tables
- Mathematical function tables
- Hardware configuration data
- Calibration constants

## ROM in Modern Systems

### ROM Chips
- **BIOS/UEFI chips**: 8-32 MB flash memory
- **Firmware hubs**: Intel FWH, SPI flash
- **Embedded controllers**: Keyboard controllers, EC firmware

### ROM as Firmware
Modern "ROM" is often flash memory:
- Can be updated (flashed)
- Still considered ROM functionally
- Protects against accidental modification
- Allows security patches and updates

### Write Protection
- Hardware switches/jumpers
- Software write-protect flags
- Dual-bank architecture (active + backup)
- Prevents corruption during updates

## ROM Capacity

Traditional ROM sizes:
- **1 KB - 64 KB**: Early microcomputers
- **128 KB - 512 KB**: 1980s-1990s PCs
- **1 MB - 16 MB**: Early 2000s systems
- **16 MB - 256 MB**: Modern UEFI systems

## Advantages

- **Data persistence**: Survives power loss
- **Security**: Cannot be easily modified
- **Reliability**: No moving parts
- **Boot capability**: Essential for system startup
- **Cost-effective**: Cheap for mass production
- **Speed**: Fast read access

## Disadvantages

- **Immutable**: Cannot change contents (traditional ROM)
- **Update difficulty**: Firmware updates challenging
- **Limited capacity**: Smaller than modern storage
- **Write endurance**: Flash memory degrades
- **Speed**: Slower than RAM for writing

## Evolution to Flash Memory

Modern systems rarely use true ROM:
- **Flash memory** provides ROM-like persistence
- **EEPROM** allows field updates
- **SPI flash** common for BIOS storage
- **Firmware updates** delivered over internet

## Security Considerations

- **Rootkits**: Malware targeting firmware
- **Write protection**: Essential for security
- **Secure Boot**: Validates ROM contents
- **TPM**: Hardware security with ROM
- **Supply chain**: Ensuring authentic firmware

## Common ROM Formats

| Type | Erasure | Programming | Typical Use |
|------|---------|-------------|-------------|
| Mask ROM | N/A | Factory | Mass production |
| PROM | N/A | One-time | Custom low-volume |
| EPROM | UV light | Special equipment | Development |
| EEPROM | Electric | Electric | Configuration data |
| Flash | Electric (block) | Electric | BIOS, SSDs, USB |
