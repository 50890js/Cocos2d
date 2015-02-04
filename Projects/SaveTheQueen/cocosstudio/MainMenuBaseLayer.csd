<GameProjectFile>
  <PropertyGroup Type="Layer" Name="MainMenuBaseLayer" ID="0a71e63f-4610-4973-997e-90409bc7fa7a" Version="2.1.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Layer" FrameEvent="" ctype="LayerObjectData">
        <Position X="0.0000" Y="0.0000" />
        <Scale ScaleX="1.0000" ScaleY="1.0000" />
        <AnchorPoint />
        <CColor A="255" R="255" G="255" B="255" />
        <Size X="800.0000" Y="450.0000" />
        <PrePosition X="0.0000" Y="0.0000" />
        <PreSize X="0.0000" Y="0.0000" />
        <Children>
          <NodeObjectData Name="BG" ActionTag="684668480" FrameEvent="" Tag="3" ObjectIndex="1" PositionPercentXEnabled="True" PositionPercentYEnabled="True" ctype="SpriteObjectData">
            <Position X="400.0000" Y="225.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <CColor A="255" R="255" G="255" B="255" />
            <Size X="800.0000" Y="450.0000" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="BG.png" />
          </NodeObjectData>
          <NodeObjectData Name="btn_audioToggle" ActionTag="-1381233729" FrameEvent="" CallBackName="onToggleAudio" Tag="4" ObjectIndex="1" PercentWidthEnable="True" PercentHeightEnable="True" LeftMargin="5.0000" RightMargin="755.0000" TopMargin="8.5000" BottomMargin="401.5000" TouchEnable="True" ctype="CheckBoxObjectData">
            <Position X="25.0000" Y="421.5000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <CColor A="255" R="255" G="255" B="255" />
            <Size X="40.0000" Y="40.0050" />
            <PrePosition X="0.0313" Y="0.9367" />
            <PreSize X="0.0500" Y="0.0889" />
            <NormalBackFileData Type="Normal" Path="audio_off_64X64.png" />
            <PressedBackFileData Type="Normal" Path="audio_off_64X64.png" />
            <DisableBackFileData Type="Default" Path="Default/CheckBox_Disable.png" />
            <NodeNormalFileData Type="Normal" Path="audio_64X64.png" />
            <NodeDisableFileData Type="Normal" Path="audio_off_64X64.png" />
          </NodeObjectData>
          <NodeObjectData Name="btn_play" ActionTag="-1861009700" FrameEvent="playFrameEvent" CallBackType="Touch" CallBackName="onPlayPressed" Tag="5" ObjectIndex="1" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="296.0000" RightMargin="456.0000" TopMargin="207.0000" BottomMargin="207.0000" FontSize="36" LabelText="Play" HorizontalAlignmentType="HT_Center" ctype="TextObjectData">
            <Position X="320.0000" Y="225.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <CColor A="255" R="255" G="255" B="255" />
            <Size X="48.0000" Y="36.0000" />
            <PrePosition X="0.4000" Y="0.5000" />
            <PreSize X="0.0600" Y="0.0800" />
            <FontResource Type="Normal" Path="Fishfingers.ttf" />
          </NodeObjectData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>