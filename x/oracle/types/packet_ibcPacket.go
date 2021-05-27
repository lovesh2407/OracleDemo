package types

// ValidateBasic is used for validating the packet
func (p IbcPacketPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcPacketPacketData) GetBytes() ([]byte, error) {
	var modulePacket OraclePacketData

	modulePacket.Packet = &OraclePacketData_IbcPacketPacket{&p}

	return modulePacket.Marshal()
}
